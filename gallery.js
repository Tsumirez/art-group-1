let slides = document.querySelectorAll(".slides > div");

slides.forEach((slide, index) => (slide.style.order = index));

let browse = (offset) => {
  slides.forEach((slide, index) => {
     slide.style.order = ((+slide.style.order+offset) % slides.length +1 || slides.length)-1;
  });
};