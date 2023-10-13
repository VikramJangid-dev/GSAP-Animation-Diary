gsap.from("#pag1 .box", {
  scale: 2,
  opacity: 0,
  duration: 1.5,
  delay: 1,
});

gsap.from("#pag2 .box", {
  x: -200,
  rotate: 360,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#pag2 .box",
    scroller: "body",
    markers: true,
    start: "top 80%",
    end: "top 50%",
    scrub: 2,
    // pin : true
  },
});

gsap.from("#pag3 .box", {
  x: 200,
  opacity: 0,
  duration:2,
  scrollTrigger: {
    trigger: "#pag3 .box",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
});

/*

scrollTrigger:{
    trigger : "", ✅
    scroller : "", ✅
    markers : true/false, ✅
    start : "top 50%" ✅
    end : "top 50%" ✅
    scrub : "true" "1" -> smoth depend on scroll ✅
    pin: "true/false" ✅
}

1. `trigger`: The HTML element that triggers the animation when it comes into view. It's a crucial property for defining the start point of your animation.

2. `scroller`: Specifies the container element that acts as the scroll area. If not specified, it defaults to the browser window. Useful for creating custom scroll areas within your web page.

3. `markers`: A boolean value (true/false) that displays visual markers on the page to help you debug and visualize the trigger and animation points. Useful during development but should be set to 'false' in production.

4. `start`: Defines the point in the trigger element that initiates the animation. In this case, it's set to "top 50%," which means the animation begins when the trigger element is at the vertical center of the viewport.

5. `end`: Specifies the point in the trigger element where the animation ends. Similar to `start`, it's set to "top 50%" here, meaning the animation completes when the trigger element is at the vertical center of the viewport.

6. `scrub`: A setting that enables smooth scrolling animation. If set to "true," it makes the animation progress linearly with the scroll position, creating a parallax effect. A numeric value, like "1," can control the intensity of the scrub effect.

7. `pin`: A boolean value (true/false) that pins the trigger element in place while the animation plays. Useful for creating sticky elements during a scroll-triggered animation.


*/
