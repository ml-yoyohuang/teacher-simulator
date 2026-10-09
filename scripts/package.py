from pathlib import Path
import json,zipfile,hashlib
root=Path(__file__).resolve().parent.parent
out=root/'artifacts'/'dongshan-campus-complete.zip'
include_dirs=['.github','src','tests','scripts','public','dist','LICENSES','dongshan_campus_spec']
include_files=['MUSIC_GUIDE.md','SCENE_GUIDE.md','SCENE_SCREENSHOTS.md','README.md','ASSET_GUIDE.md','BALANCE.md','DECISIONS.md','SPEC_COVERAGE.md','QA_REPORT.md','PERFORMANCE_REPORT.md','KNOWN_ISSUES.md','PROGRESS.md','package.json','pnpm-lock.yaml','pnpm-workspace.yaml','tsconfig.json','vite.config.ts','index.html','soundtest.html','start-local.command','.gitignore']
files=[]
include_files=list(dict.fromkeys(include_files+[p.name for p in root.glob('*.md')]+[p.name for p in root.glob('*.html')]))
if (root/'tutorial-assets').is_dir():include_dirs.append('tutorial-assets')
for directory in include_dirs:
 files.extend(p for p in (root/directory).rglob('*') if p.is_file() and '__pycache__' not in p.parts and p.name != '.DS_Store')
files.extend(root/f for f in include_files)
files.extend(p for p in (root/'artifacts').iterdir() if p.suffix in ['.png','.json','.tap','.webm'] and not p.name.startswith('failure-') and p.name != 'DELIVERY_MANIFEST.json')
for p in files:
 if not p.exists():raise FileNotFoundError(p)
manifest={str(p.relative_to(root)):hashlib.sha256(p.read_bytes()).hexdigest() for p in sorted(files)}
(root/'artifacts'/'DELIVERY_MANIFEST.json').write_text(json.dumps(manifest,indent=2,ensure_ascii=False))
with zipfile.ZipFile(out,'w',zipfile.ZIP_DEFLATED) as z:
 for p in sorted(files):z.write(p,'dongshan-campus/'+str(p.relative_to(root)))
 z.write(root/'artifacts'/'DELIVERY_MANIFEST.json','dongshan-campus/DELIVERY_MANIFEST.json')
print(json.dumps({'zip':str(out),'bytes':out.stat().st_size,'files':len(files)+1}))
with zipfile.ZipFile(out) as z:
 assert z.testzip() is None
 assert any(n.endswith('/dist/index.html') for n in z.namelist())
 assert any(n.endswith('/src/game.ts') for n in z.namelist())
