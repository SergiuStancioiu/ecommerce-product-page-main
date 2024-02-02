const hamburger = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cart = document.querySelector(".cart");
const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const addToCartBtn = document.querySelector(".add-to-cart-wrapper");
const deleteProdFromCart = document.querySelector(".delete-prod");
const overlay = document.querySelector(".overlay");
const sliderRightBtn = document.querySelector(".arrow-right");
const sliderLeftBtn = document.querySelector(".arrow-left");

document.addEventListener("DOMContentLoaded", checkCartQtyIsZero);

hamburger.addEventListener("click", toggleMobileMenu);
closeMenu.addEventListener("click", toggleMobileMenu);
overlay.addEventListener("click", toggleMobileMenu);

cart.addEventListener("click", toggleCart);

plusBtn.addEventListener("click", incrementQty);
minusBtn.addEventListener("click", decrementQty);
addToCartBtn.addEventListener("click", addProductsToCart);
deleteProdFromCart.addEventListener("click", deleteProduct);

sliderRightBtn.addEventListener("click", sliderImage);
sliderLeftBtn.addEventListener("click", sliderImage);

function toggleMobileMenu() {
  mobileMenu.classList.toggle("active");
}

function toggleCart() {
  const cartContainer = document.querySelector(".cart-wrapper");

  cartContainer.classList.toggle("hidden");
}

function incrementQty() {
  const qty = document.querySelector(".qty");

  let qtyNumber = parseInt(qty.textContent);

  qtyNumber = qtyNumber + 1;

  qty.textContent = qtyNumber;
}

function decrementQty() {
  const qty = document.querySelector(".qty");

  let qtyNumber = parseInt(qty.textContent);

  if (qtyNumber > 0) {
    qtyNumber = qtyNumber - 1;
  }

  qty.textContent = qtyNumber;
}

function checkCartQtyIsZero() {
  const qty = document.querySelector(".qty");
  const cartProductNumber = document.querySelector(".cart-product-number");

  if (parseInt(qty.textContent) === 0) {
    cartProductNumber.classList.add("hidden");
  }
}

function addProductsToCart() {
  const qty = document.querySelector(".qty");
  const productNumber = document.querySelector(".prod-nr");
  const cartProductQty = document.querySelector(".prod-qty");
  const productsTotalPrice = document.querySelector(".prod-total-price");
  const cartProductNumber = document.querySelector(".cart-product-number");
  const noProductsInCart = document.querySelector(".no-products");
  const productCartWrapper = document.querySelector(".product-cart-wrapper");
  const productPrice = document.querySelector(".prod-price");

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
  const qty = document.querySelector(".qty");
  const cartProductNumber = document.querySelector(".cart-product-number");
  const noProductsInCart = document.querySelector(".no-products");
  const productCartWrapper = document.querySelector(".product-cart-wrapper");

  qty.textContent = 0;

  productCartWrapper.classList.add("hidden");
  cartProductNumber.classList.add("hidden");

  noProductsInCart.classList.remove("hidden");
}

function sliderImage() {
  const sliderImg = document.querySelector(".slider-image");

  // const imageArray = [
  //   { id: 0, srcImage: "image-product-1.jpg", active: true },
  //   { id: 1, srcImage: "image-product-2.jpg", active: false },
  //   { id: 2, srcImage: "image-product-3.jpg", active: false },
  //   { id: 3, srcImage: "image-product-4.jpg", active: false },
  // ];

  // let imgSrc = "";
  // imageArray.forEach((image) => {
  //   console.log(image);

  //   imgSrc = image.srcImage;
  // });

  // console.log(imgSrc);

  const currentImage = sliderImg.nextElementSibling.innerHTML;

  console.log(currentImage);
}
