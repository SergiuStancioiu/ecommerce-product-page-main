const hamburger = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", toggleMobileMenu);
closeMenu.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  console.log("toggle mobile menu");
  mobileMenu.classList.toggle("active");
}
