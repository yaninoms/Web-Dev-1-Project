
gsap.registerPlugin(ScrollTrigger);

gsap.to(".intro-msg",{
    y:50,
    duration: 3,
    scrollTrigger: {
        trigger: ".description",
        start: "top center",
    }
})