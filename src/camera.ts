/** Keep the fixed isometric angle; orthographic span controls apparent size. */
export function cameraSpan(width:number,height:number,coarsePointer:boolean){
 const original=width/height<1?13:11.5;
 const phone=width<=600||(coarsePointer&&Math.min(width,height)<=600);
 return original/(phone?2.2:1);
}
