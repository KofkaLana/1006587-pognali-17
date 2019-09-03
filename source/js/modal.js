var popup = document.querySelector(".modal");
var btnOpen = document.querySelector(".rates__link");
var btnClose = popup.querySelector(".modal__button");

btnOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal--opened");
});

btnClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal--opened");
})
