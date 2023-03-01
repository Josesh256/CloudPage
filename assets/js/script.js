const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((item) => item.addEventListener("click", linkAction));

//SWIPER

let homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: "true",
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//SWIPER 2

let newSwiper = new Swiper(".new-swiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  loop: "true",
  spaceBetween: 20,
});

//Scroll up

function scrollUp(){
  const scrollup = document.getElementById("scroll-up")
  if(this.scrollY >= 460) scrollup.classList.add("show-scroll");
  else scrollup.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp)
//Scrollreveal

const sr = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 2500,
  delay: 400,
  reset: true,
});
sr.reveal(`.home-swiper, 
.new-swiper,.newsletter__container`);

sr.reveal(
  `.category__data,
 .trick__content, .footer__content`,
  { interval: 100 }
);

sr.reveal(`.about__data, .discount__img`, { origin: "left" });

sr.reveal(`.about__img, .discount__data`, { origin: "right" });
