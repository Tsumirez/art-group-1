//pobranie slidów z galerii celem przypisania im kolejności wyświetlania
let slides = document.querySelectorAll(".slides > div");

//przypisanie domyślnej kolejności (poprzez właściwość order w css)
slides.forEach((slide, index) => (slide.style.order = index));

//even handler dla nawigacyjnych strzałek. Przypisuje nowy porządek dla każdego slajdu.
let browse = (offset) => {
  slides.forEach((slide, index) => {
     slide.style.order = ((+slide.style.order+offset) % slides.length +1 || slides.length)-1;
  });
};