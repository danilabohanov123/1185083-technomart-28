var navigation_map_link = document.querySelector(".navigation-map");
var modal_map = document.querySelector(".modal-map");
var modal_close_map = modal_map.querySelector(".modal-close-map");

navigation_map_link.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal_map.classList.add("modal-show");
});

modal_close_map.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal_map.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal_map.classList.contains("modal-show")) {
      evt.preventDefault();
      modal_map.classList.remove("modal-show");
    }
  }
});
