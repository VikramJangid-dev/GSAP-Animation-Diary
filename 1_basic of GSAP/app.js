// gsap.to

gsap.to("#box1", {
  x: 500,
  duration: 3,
  ease: Expo.easeInOut,
  backgroundColor: "orange",
});

// gsap.from

gsap.from("#box2", {
  x: 500,
  duration: 3,
  ease: Expo.easeInOut,
  backgroundColor: "purple",
});

// gsap More - fromTo state

gsap.fromTo(
  "#box3",
  {
    x: 100,
    ease: Expo.easeOut,
  },
  {
    x: 550,
    y: 100,
    duration: 3,
    backgroundColor: "green",
    ease: Expo.easeIn,
  }
);

//  Function call durung animation (Open Console)

// gsap.to("#box1", {
//   x: 300,
//   backgroundColor: "salmon",
//   ease: Expo.easeInOut,
//   duration: 2,

//   onStart: function () {
//     console.log("Started");
//   },

//   onProgress: function () {
//     console.log("Progress");
//   },

//   onUpdate: function () {
//     console.log("Hey!!!!");
//   },

//   onComplete: function () {
//     console.log("completed");
//   },
// });
