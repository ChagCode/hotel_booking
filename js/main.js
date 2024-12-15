const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
});

var menuButton = document.querySelector(".header__hidden-menu");
menuButton.addEventListener("click", function () {
  console.log("Клик по кнопке");
  document
    .querySelector(".header-menu")
    .classList.toggle("header-menu--visible");
});
