gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease:"none",duration:2});

gsap.fromTo(".heading", {y:-50,opacity:0,duration:1.2}, {y:0,opacity:1,duration:1.2});

console.log("jsdhfksjdhfksjdfhksdjfs dfksjdfhs skjfsd fdsdf");
const tl = gsap.timeline();
tl.from(".orance",{xPercent:-100})
  .from(".purple",{xPercent:100})
  .from(".green",{xPercent:-100});


ScrollTrigger.create({
  animation:tl,
  trigger:".projects",
  start:"top top",
  end:"+=4000",
  scrub:true,
  pin:true,
  anticipatePin:1
})

const imgDiv = document.getElementById('project_img');
console.log("sdaasd",imgDiv)

imgDiv.addEventListener("mouseover",myFunction);
function myFunction() {
  console.log("HIHI");
}
