const mouuseScale = (mouseEnterCon)=>{
    let box = document.querySelector(mouseEnterCon);
    box.addEventListener("mouseenter",function(){
        gsap.to(".mouse-outline, .mouse-un-out",{
            scale:2,
        })
    })
    box.addEventListener("mouseleave",function(){
        gsap.to(".mouse-outline, .mouse-un-out",{
            scale:1
        })
    })
}

gsap.from(".tech-head> h1",{
    opacity:0,
    y:30,
    stagger:0.1,
    scrollTrigger:{
        trigger:".tech-head",
        scroller: ".right-main",
        // markers:true,
        scrub:true,
        end:"top 10%"
    }
})
setTimeout(() => {
    gsap.from(".name-absolute p",{
        // opacity:0,
        x:100,
        duration:1.5
    })
    gsap.from(".arrow",{
        // opacity:0,
        scale:0,
        duration:1.5
    })
    gsap.from(".sub-con-1 h1,.boyimage img",{
        // opacity:0,
        y:30,
        duration:1.5
    });
}, 5000);
//Page -1  Scroll Text
gsap.to(".prj-contn",{
    transform:"translateX(-325%)",
    scrollTrigger:{
        trigger:"#project-sec",
        scroller:".right-main",
        // markers:true,
        scrub:true,
        pin:true
    }
})
gsap.from(".textConLP h2",{
    opacity:0,
    y:50,
    scrollTrigger:{
        trigger:"#cpy-cnt-sec",
        scroller:".right-main",
        start:"top 20%  ",
        markers:true,
    }
})


mouuseScale(".textConLP");
mouuseScale(".sub-con-1");
mouuseScale(".contact-navi");
mouuseScale(".big");
