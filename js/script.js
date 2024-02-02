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
const productCartWrapper = document.querySelector(".product-cart-wrapper");
const productPrice = document.querySelector(".prod-price");

hamburger.addEventListener("click", toggleMobileMenu);
closeMenu.addEventListener("click", toggleMobileMenu);

cart.addEventListener("click", toggleCart);

plusBtn.addEventListener("click", incrementQty);
minusBtn.addEventListener("click", decrementQty);
addToCartBtn.addEventListener("click", addProductsToCart);
deleteProdFromCart.addEventListener("click", deleteProduct);

function toggleMobileMenu() {
  mobileMenu.classList.toggle("active");
}

function toggleCart() {
  cartContainer.classList.toggle("hidden");
}

function incrementQty() {
  let qtyNumber = parseInt(qty.textContent);

  if (qtyNumber >= 0) {
    qtyNumber = qtyNumber + 1;
  }

  qty.textContent = qtyNumber;
}

function decrementQty() {
  let qtyNumber = parseInt(qty.textContent);

  if (qtyNumber > 0) {
    qtyNumber = qtyNumber - 1;
  }

  qty.textContent = qtyNumber;
}

if (parseInt(qty.textContent) === 0) {
  cartProductNumber.classList.add("hidden");
}

function addProductsToCart() {
  let qtyNumber = parseInt(qty.textContent);

  if (qtyNumber > 0) {
    let totalPrice = productPrice.textContent * qtyNumber;
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
  qty.textContent = 0;

  productCartWrapper.classList.add("hidden");
  cartProductNumber.classList.add("hidden");

  noProductsInCart.classList.remove("hidden");
}
