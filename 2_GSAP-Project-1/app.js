const tl = gsap.timeline();
gsap.set(".a", { opacity: 0, y: 20 });
gsap.set(".b", { opacity: 0, y: 20 });
gsap.set("#rightmain-img", { opacity: 0, y: 20, scale: 1.6 });

tl.from("#left", {
  width: 0,
  ease: Expo.easeInOut,
  duration: 1.2,
})
  .from("#right", {
    width: 0,
    ease: Expo.easeInOut,
    duration: 1.2,
  })
  .to(".a", {
    delay: -1.8,
    y: 0,
    opacity: 1,
    ease: Expo.easeInOut,
    duration: 1.5,
    stagger: 0.2,
  })
  .to(".b", {
    delay: -1,
    y: 0,
    opacity: 1,
    ease: Expo.easeInOut,
    duration: 1,
    stagger: 0.2,
  })
  .to("#rightmain-img", {
    delay: -1.8,
    y: 0,
    opacity: 1,
    scale: 1,
    ease: Expo.easeInOut,
    duration: 1.5,
  });
