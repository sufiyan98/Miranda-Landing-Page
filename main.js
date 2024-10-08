const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var tl=gsap.timeline()

tl.to("#page1",{
    y:"100vh",
    scale:0.5,
})

tl.to("#page1",{
    y:"30vh",
    scale:0.8,
    duration:1,
    delay:1
})


tl.to("#page1",{
    y:"0vh",
    rotate:-720,
    scale:1,
    duration:0.9
})