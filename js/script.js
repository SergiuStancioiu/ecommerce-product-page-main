const hamburger = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cart = document.querySelector(".cart");
const cartContainer = document.querySelector(".cart-wrapper");

hamburger.addEventListener("click", toggleMobileMenu);
closeMenu.addEventListener("click", toggleMobileMenu);
cart.addEventListener("click", toggleCart);

function toggleMobileMenu() {
  mobileMenu.classList.toggle("active");
}

function toggleCart() {
  cartContainer.classList.toggle("hidden");
}
