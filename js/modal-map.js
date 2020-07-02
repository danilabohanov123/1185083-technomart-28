var navigation_map_link = document.querySelector(".navigation-map");
var modal_map = document.querySelector(".modal-map");
var modal_close_map = document.querySelector(".modal-close-map");

navigation_map_link.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal_map.classList.add("modal-show");
});

modal_close_map.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal_map.classList.remove("modal-show");
});

document.body.addEventListener("keyup", function (e) {
  var key = e.keyCode;

  if (key == 27) {
    modal_map.classList.remove("modal-show");
  };
}, false);
