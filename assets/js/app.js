"use strict";

/* ================== VARIABLES ==================  */
const toggle = document.getElementById("nav-toggle");
const close = document.getElementById("nav-close");
const menu = document.querySelector(".nav__menu");
const navLink = document.querySelectorAll(".nav__link");

/* ================== SHOW AND HIDE MENU ==================  */
toggle.addEventListener("click", function () {
  toggle.hidden = true;
  menu.style.top = "0";
  close.hidden = false;
});
/* ================== CLOSE MENU ==================  */
close.addEventListener("click", function () {
  close.hidden = true;
  menu.style.top = "-100%";
  toggle.hidden = false;
});

/* ========= CLOSE MOBILE MENU BY CLICKING  LINKS=========  */
navLink.forEach((e) =>
  e.addEventListener("click", function () {
    menu.style.top = "-100%";
    toggle.hidden = false;
  })
);

/* ================== SWIPER ==================  */
const swiperWatches = new Swiper(".home_swiper", {
  loop: true,
  spaceBetween: 32,
  grabCurser: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [-100, 0, -500],
      rotate: [0, 0, -15],
      opacity: 0,
    },
    next: {
      translate: [100, 0, -500],
      rotate: [0, 0, 15],
      opacity: 0,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* ================== GSAP ==================  */
gsap.from(".home__images", 1.5, { opacity: 0, y: 150, delay: 0.8 });
gsap.from(".home__info", 1.8, { opacity: 0, x: 150, delay: 0.7 });
gsap.from(".home__content", 1.8, { opacity: 0, x: -150, delay: 1 });
