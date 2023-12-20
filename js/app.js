
console.clear();

gsap.to('.golf-man-desk',{ 
  y:-597,
  scale:1,
  
  scrollTrigger:{
  trigger:".golf-baner-sec",
  start: "center center",
  end: "+=1000 center",
  scrub:1,
  pin:true,
  toggleActions:"none none none none",   
}
}
);


gsap.to('.golf-man-mobile',{ 
  y:-404,
  scale:1,
  
  scrollTrigger:{
  trigger:".golf-baner-sec",
  start: "center center",
  end: "+=1000 center",
  scrub:1,
  pin:true,
  toggleActions:"none none none none",   
}
}
);

gsap.to('.center-build',{ 
  y:0,
  scale:1,
 
  skewX: 1,
  scrollTrigger:{
  trigger:".center-building-sec",
  start: "center center",
  end: "+=1000 center",
  scrub:1,
  toggleActions:"none none none none",   
}
}
);



 