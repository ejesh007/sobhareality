
console.clear();

 
 
const subDiscsub = document.querySelector('.sub-disc1sub');
 

 
const tl = new TimelineMax();
tl.from(".line span", 1.8, {
  y: 100,
  ease: "power4.out",
  delay: 1,
  skewY: 7,
  stagger: {
    amount: 0.3
  }
}, "-=1") 
  .fromTo(".s-logo", 1, {opacity:0 }, {opacity:1, ease: Power2.easeInOut},"-=1")
  .fromTo(".camp-logo", 1, {opacity:0 }, {opacity:1, ease: Power2.easeInOut},"-=1")
  .fromTo(".building-title", 1, {y:"200%" }, {y:"0%", ease: Power2.easeInOut},"-=1")
 





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


ScrollTrigger.matchMedia({
  "(max-width: 1000px)": function () {
gsap.to('.golf-man',{ 
  y:-350,
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
return function() {
  animation.kill();
  console.log('kill it max-width');
  }
  }
  });

ScrollTrigger.matchMedia({
  "(min-width: 1000px)": function () {
gsap.to('.golf-man',{ 
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
return function() {
  animation.kill();
  console.log('kill it max-width');
  }
  }
  });

 



 