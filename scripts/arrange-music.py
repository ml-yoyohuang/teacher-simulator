"""Rebuild the user's music assets. Requires Python + numpy and FFmpeg 7.1.
Run: python3 scripts/arrange-music.py --ffmpeg /path/to/ffmpeg
Original files remain untouched in _incoming-assets (not needed at runtime).
"""
from pathlib import Path
import argparse, subprocess, hashlib, json, tempfile
import numpy as np
p=argparse.ArgumentParser();p.add_argument('--ffmpeg',required=True);args=p.parse_args()
root=Path(__file__).resolve().parent.parent;out=root/'public/music';out.mkdir(parents=True,exist_ok=True)
ff=args.ffmpeg;sr=44100

def run(cmd):return subprocess.run([ff,'-hide_banner','-v','error','-y',*cmd],check=True,stdout=subprocess.PIPE).stdout

def decode(path,rate=sr,channels=2,filters=None):
    cmd=['-i',str(path)]
    if filters:cmd+=['-af',filters]
    return np.frombuffer(run(cmd+['-f','f32le','-ac',str(channels),'-ar',str(rate),'-']),dtype=np.float32).reshape(-1,channels).copy()

def encode(x,path):
    subprocess.run([ff,'-v','error','-y','-f','f32le','-ar',str(sr),'-ac','2','-i','-','-af','loudnorm=I=-20:TP=-2:LRA=9','-ar',str(sr),'-c:a','libmp3lame','-b:a','96k','-map_metadata','-1',str(path)],input=x.astype('<f4').tobytes(),check=True)

def analyse(path):
    x=decode(path,22050,1).ravel();frames=np.lib.stride_tricks.sliding_window_view(x,1024)[::256]
    spectrum=np.abs(np.fft.rfft(frames*np.hanning(1024),axis=1));flux=np.maximum(np.diff(spectrum,axis=0),0).mean(axis=1);f=flux-flux.mean();n=len(f)
    ac=np.fft.irfft(abs(np.fft.rfft(f,n*2))**2)[:n];candidates=[]
    for bpm in np.arange(70,181,.25):
        lag=60*22050/(256*bpm);score=sum(np.interp(lag*k,np.arange(n),ac)/k for k in [1,2,3,4]);candidates.append((score,bpm))
    bpm=float(max(candidates)[1]);beat=60/bpm
    # Estimated beat grid: strongest flux alignment in the first 45 seconds.
    phases=np.arange(0,beat,256/22050);phase=max(phases,key=lambda t:sum(np.interp((t+np.arange(8,88)*beat)*22050/256,np.arange(n),flux)))
    return {'estimatedBpm':bpm,'estimatedBeatOffset':round(float(phase),4),'seconds':len(x)/22050}

report={'date':'2026-10-09','method':'FFmpeg atempo (pitch preserved), source excerpt + original procedural percussion, -20 LUFS / -2 dBTP target, MP3 96 kbps stereo 44.1 kHz','sources':[],'outputs':[],'limitations':['Tempo/grid inferred by spectral flux, not manually verified. No stem separation, newly sung vocals or human listening validation.']}
originals=sorted((root/'_incoming-assets').glob('*.mp3'))
assert len(originals)==4
for i,path in enumerate(originals,1):
    a=analyse(path);a.update({'file':path.name,'sha256':hashlib.sha256(path.read_bytes()).hexdigest()});report['sources'].append(a)
    dest=out/f'explore-{i:02}.mp3';encode(decode(path),dest)
    report['outputs'].append({'id':f'explore-{i:02}','file':dest.name,'kind':'full original mix, loudness/encoding only','source':path.name,'estimatedBpm':a['estimatedBpm']})
    print('Prepared',dest.name,flush=True)
source=originals[0];a=report['sources'][0];base=a['estimatedBpm'];start=a['estimatedBeatOffset']+32*60/base;length=128*60/base
for name,bpm,style in [('chase',150,'chase'),('anniversary-explore',140,'festival'),('anniversary-chase',160,'festival-chase')]:
    x=decode(source,filters=f'atrim=start={start}:duration={length},asetpts=PTS-STARTPTS,atempo={bpm/base},highpass=f=55,lowpass=f=14500')
    duration=128*60/bpm;count=round(duration*sr);x=np.pad(x,((0,max(0,count-len(x))),(0,0)))[:count];x*=.68
    rng=np.random.default_rng(6477+bpm);drums=np.zeros(count)
    def put(t,y,g):
        j=round(t*sr);k=min(len(y),count-j)
        if j>=0 and k>0:drums[j:j+k]+=y[:k]*g
    def noise(seconds,decay):
        t=np.arange(round(seconds*sr))/sr;white=rng.normal(0,.4,len(t));bright=np.r_[0,np.diff(white)]
        return t,bright*np.exp(-decay*t)
    for beat in range(128):
        t0=beat*60/bpm;t=np.arange(round(.2*sr))/sr
        kick=np.sin(2*np.pi*(48*t+8*(1-np.exp(-35*t))))*np.exp(-22*t);put(t0,kick,.16 if style=='festival' else .23)
        if beat%2==1:
            t,n=noise(.16,30);snare=n+np.sin(2*np.pi*180*t)*np.exp(-35*t)*.15;put(t0,snare,.19 if style=='festival' else .27)
        for subdivision in range(2 if style!='festival-chase' else 4):
            t,n=noise(.06,85);put(t0+subdivision*60/bpm/(2 if style!='festival-chase' else 4),n,.065 if subdivision else .085)
        if style.startswith('festival'):
            t,n=noise(.12,25);put(t0,n,.055)
            if beat%4 in [0,3]:
                t,n=noise(.15,40);clap=n*(1+.5*np.sin(2*np.pi*37*t));put(t0,clap,.16)
        if beat%16==15:
            for off,freq in [(0,165),(.5,125),(.75,90)]:
                t=np.arange(round(.13*sr))/sr;put(t0+off*60/bpm,np.sin(2*np.pi*freq*t)*np.exp(-25*t),.1)
    x+=drums[:,None]
    # Periodic 20ms edge fade prevents clicks; scene player also crossfades loops.
    edge=round(.02*sr);x[:edge]*=np.linspace(0,1,edge)[:,None];x[-edge:]*=np.linspace(1,0,edge)[:,None]
    dest=out/(name+'.mp3');encode(x,dest)
    report['outputs'].append({'id':name,'file':dest.name,'source':source.name,'sourceStartSeconds':start,'sourceExcerptSeconds':length,'targetBpm':bpm,'percussion':style,'kind':'128 beat excerpt; pitch-preserving tempo edit + procedural percussion'})
    print('Arranged',dest.name,flush=True)
for record in report['outputs']:
    path=out/record['file'];audio=decode(path);record.update({'seconds':round(len(audio)/sr,3),'bytes':path.stat().st_size,'sha256':hashlib.sha256(path.read_bytes()).hexdigest(),'decodedPeakDbFS':round(float(20*np.log10(np.max(abs(audio)))),3),'rmsDbFS':round(float(20*np.log10(np.sqrt(np.mean(audio**2)))),3)})
report['totalBytes']=sum(r['bytes'] for r in report['outputs'])
(root/'artifacts/music-assets.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
(out/'manifest.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'bytes':report['totalBytes'],'tracks':len(report['outputs'])}))
