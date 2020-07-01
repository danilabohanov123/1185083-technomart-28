let sign_in = document.querySelector(".sign-in");
let sign_up = document.querySelector(".sign-up");
let modal_login = document.querySelector(".modal-login");
let modal_close_login = document.querySelector(".modal-close-login");
let login_form= document.querySelector(".login-form");
let profile = document.querySelector(".profile");
let login_login = document.querySelector(".login-login");
let authorization = document.querySelector(".authorization");
let personal_account = document.querySelector(".personal-account");
let cart = document.querySelector(".cart");

sign_in.onclick = function() {
  modal_login.classList.add("modal-show");
};

sign_up.onclick = function() {
  modal_login.classList.add("modal-show");
};

login_form.onsumbit = function() {
  profile.textContent = login_login.value;
  authorization.classList.add('hide');
  personal_account.classList.add('show-flex');
  cart.textContent = "Корзина: 10";
  cart.classList.add('cart-login');
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
