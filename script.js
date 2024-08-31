var cur = document.querySelector("#cursor")
var curBlur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    cur.style.left = dets.x+ 10 +"px"
    cur.style.top =dets.y+"px"
    curBlur.style.left = dets.x - 250 +"px"
    curBlur.style.top =dets.y - 250 +"px"

})

var heading= document.querySelectorAll("#nav h4")
heading.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cur.style.scale =3
        cur.style.border = "1px solid #fff"
        cur.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        cur.style.scale = 1
        cur.style.border = "0px solid #95c11e"
        cur.style.backgroundColor = "#95c11e"
    })
})

gsap.to("#nav", {
    backgroundColor: "#000",
    height:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
    
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})
gsap.from("#about-us img, #about-usin",{
    y:50,
    opacity:0,
    duration: 1,
    stagger: 0.5,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 55%",
        scrub: 2

    }
    
})
gsap.from(".card",{
    scale: 0.8,
    opacity:0,
    duration: 1,
    stagger: 0.6,
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 65%",
        scrub: 3

    }
    
})
gsap.from("#colon1", {
    y:-60,
    x:-60,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start: "top 50%",
        end:"top 43%",
        scrub: 3

    }
})
gsap.from("#colon2", {
    y:60,
    x:60,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start: "top 55%",
        end:"top 46%",
        scrub: 2

    }
})
gsap.from("#page4 h1", {
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start: "top 75%",
        end:"top 70%",
        scrub: 3
    }
})