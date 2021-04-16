const glide1Element = document.querySelector("#glide1");
const glide2Element = document.querySelector("#glide2");
const glide3Element = document.querySelector("#glide3");

if (glide1Element) {
  new Glide(glide1Element, {
    type: "carousel",
    startAt: 0,
    perView: 1,
    // autoplay: 3000,
    hoverpause: true,
    animationDuration: 1000,
    animationTimingFunc: "linear",
  }).mount();
}
if (glide2Element) {
  new Glide(glide2Element, {
    type: "carousel",
    startAt: 0,
    perView: 5,
    autoplay: 3000,
    hoverpause: false,
    animationDuration: 1000,
    animationTimingFunc: "linear",
    breakpoints: {
      1200: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
    },
  }).mount();
}
if (glide3Element) {
  new Glide(glide3Element, {
    type: "carousel",
    startAt: 0,
    perView: 3,
    autoplay: 3000,
    hoverpause: false,
    animationDuration: 1000,
    animationTimingFunc: "linear",
    breakpoints: {
      768: {
        perView: 1,
      },
    },
  }).mount();
}
