// CURSOR
const cursor = document.querySelector(".cursor");
const ring = document.querySelector(".cursor-ring");

document.addEventListener("mousemove", e=>{
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  ring.style.left = e.clientX - 15 + "px";
  ring.style.top = e.clientY - 15 + "px";
});

// MAGNETIC BUTTONS
document.querySelectorAll(".magnet").forEach(btn=>{
  btn.addEventListener("mousemove", e=>{
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width/2;
    const y = e.clientY - r.top - r.height/2;
    btn.style.transform = `translate(${x*0.3}px,${y*0.3}px)`;
  });
  btn.addEventListener("mouseleave",()=>{
    btn.style.transform="translate(0,0)";
  });
});

// GSAP ANIMATIONS
gsap.from(".hero-left",{
  opacity:0,
  x:-120,
  duration:1.4,
  ease:"power4.out"
});

gsap.from(".hero-right",{
  opacity:0,
  x:120,
  duration:1.4,
  delay:0.3,
  ease:"power4.out"
});

gsap.from(".about-left",{
  scrollTrigger:{trigger:"#about",start:"top 70%"},
  opacity:0,
  x:-120,
  duration:1.4
});

gsap.from(".about-right",{
  scrollTrigger:{trigger:"#about",start:"top 70%"},
  opacity:0,
  x:120,
  duration:1.4
});
