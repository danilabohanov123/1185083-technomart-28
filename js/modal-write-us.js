var write_us_link = document.querySelector(".write-us-link");
var modal_write_us = document.querySelector(".modal-write-us");
var modal_close_write_us = document.querySelector(".modal-close-write-us");

write_us_link.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal_write_us.classList.add("modal-show");
});

modal_close_write_us.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal_write_us.remove("modal-show");
});

document.body.addEventListener("keyup", function (e) {
  var key = e.keyCode;

  if (key == 27) {
    modal_write_us.remove("modal-show");
  };
}, false);
