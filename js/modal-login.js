let sign_in = document.querySelector(".sign-in");
let sign_up = document.querySelector(".sign-up");
let modal_login = document.querySelector(".modal-login");
let modal_close_login = document.querySelector(".modal-close-login");

sign_in.onclick = function() {
  modal_login.classList.add("modal-show");
};

sign_up.onclick = function() {
  modal_login.classList.add("modal-show");
};

modal_close_login.onclick = function() {
  modal_login.classList.remove("modal-show");
};

document.body.addEventListener("keyup", function (e) {
  var key = e.keyCode;

  if (key == 27) {
    modal_login.classList.remove("modal-show");
  };
}, false);
