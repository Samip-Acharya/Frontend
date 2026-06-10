var tl = gsap.timeline({
    scrollTrigger: {
        trigger:"#wrapper",
        start:"top 60%",
        end:"top -100%",
        // markers:true,
        scrub:true
    }
})

tl.from(".box",{
    x:-500,
    stagger:0.4,
    backgroundColor:"red"
})