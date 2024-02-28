"use strict";

/* ================== SHOW MENU ==================  */
const toggle = document.getElementById("nav-toggle");
const close = document.getElementById("nav-close");
const menu = document.querySelector(".nav__menu");

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