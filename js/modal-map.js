let navigation_map_link = document.querySelector(".navigation-map");
let modal_map = document.querySelector(".modal-map");
let modal_close = document.querySelector(".modal-close");

navigation_map_link.onclick = function() {
  modal_map.classList.add("modal-show");
}

modal_close.onclick = function() {
  modal_map.classList.remove("modal-show");
}

document.body.addEventListener("keyup", function (e) {
  var key = e.keyCode;

  if (key == 27) {
    modal_map.classList.remove("modal-show");
  };
}, false);
