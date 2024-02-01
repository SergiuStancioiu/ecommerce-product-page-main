const hamburger = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cart = document.querySelector(".cart");
const cartContainer = document.querySelector(".cart-wrapper");
const minusBtn = document.querySelector(".minus");
const qty = document.querySelector(".qty");
const plusBtn = document.querySelector(".plus");
const productNumber = document.querySelector(".prod-nr");
const cartProductQty = document.querySelector(".prod-qty");
const productsTotalPrice = document.querySelector(".prod-total-price");
const addToCartBtn = document.querySelector(".add-to-cart-wrapper");
const cartProductNumber = document.querySelector(".cart-product-number");
const deleteProdFromCart = document.querySelector(".delete-prod");
const noProductsInCart = document.querySelector(".no-products");
const cartContent = document.querySelector(".cart-content");
const productCartWrapper = document.querySelector(".product-cart-wrapper");

hamburger.addEventListener("click", toggleMobileMenu);
closeMenu.addEventListener("click", toggleMobileMenu);
cart.addEventListener("click", toggleCart);

plusBtn.addEventListener("click", incrementQty);
minusBtn.addEventListener("click", decrementQty);
addToCartBtn.addEventListener("click", addProductsToCart);
deleteProdFromCart.addEventListener("click", deleteProduct);

let qtyNumber = 0;
let productPrice = 125;

function toggleMobileMenu() {
  mobileMenu.classList.toggle("active");
}

function toggleCart() {
  cartContainer.classList.toggle("hidden");
}

function incrementQty() {
  if (qtyNumber >= 0) {
    qtyNumber = qtyNumber + 1;
  }

  qty.textContent = qtyNumber;
}

function decrementQty() {
  if (qtyNumber > 0) {
    qtyNumber = qtyNumber - 1;
  }

  qty.textContent = qtyNumber;
}

if (qtyNumber === 0) {
  cartProductNumber.classList.add("hidden");
}

function addProductsToCart() {
  if (qtyNumber > 0) {
    let totalPrice = productPrice * qtyNumber;
    productsTotalPrice.textContent = "$" + totalPrice.toFixed(2);

    productNumber.textContent = qtyNumber;
    cartProductQty.textContent = qtyNumber;

    productCartWrapper.classList.remove("hidden");
    cartProductNumber.classList.remove("hidden");
    noProductsInCart.classList.add("hidden");
  } else {
    cartProductNumber.classList.add("hidden");
    productCartWrapper.classList.add("hidden");
    noProductsInCart.classList.remove("hidden");
  }
}

function deleteProduct() {
  cartContent.classList.remove("product-cart-wrapper");
  noProductsInCart.classList.add("hidden");
  console.log("am apasat pe delete");
}
