const sliderRightButton = document.querySelector(".arrow-right");
const sliderLeftButton = document.querySelector(".arrow-left");
const sliderImages = document.querySelectorAll(".slider-image");

sliderRightButton.addEventListener("click", () => {
  const activeImage = document.querySelector(".active");

  let nextSiblig = activeImage.nextElementSibling;

  if (!nextSiblig) {
    nextSiblig = sliderImages[0];
  }
  activeImage.classList.remove("active");

  nextSiblig.classList.add("active");
});

sliderLeftButton.addEventListener("click", () => {
  const activeImage = document.querySelector(".active");

  let prevSibling = activeImage.previousElementSibling;

  if (!prevSibling) {
    prevSibling = sliderImages[sliderImages.length - 1];
  }

  activeImage.classList.remove("active");
  prevSibling.classList.add("active");
});
