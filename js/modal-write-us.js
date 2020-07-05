var write_us_link = document.querySelector(".write-us-link");
var modal_write_us = document.querySelector(".modal-write-us");
var modal_close_write_us = modal_write_us.querySelector(".modal-close-write-us");
var write_us_form = modal_write_us.querySelector(".write-us-form");
var login_email_field = modal_write_us.querySelector(".login-email-field");
var login_name_field = modal_write_us.querySelector(".login-name-field");
var message_text_field = modal_write_us.querySelector(".message-text-field");

var is_storage_support = true;
var storage_name = "";
var storage_email = "";

try {
  storage_name = localStorage.getItem("login-name");
  storage_email = localStorage.getItem("login-email");
} catch (err) {
  is_storage_support = false;
}

write_us_link.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal_write_us.classList.add("modal-show");

  if (storage_name) {
    login_name_field.value = storage_name;
    login_email_field.value = storage_email;
    message_text_field.focus();
  } else {
    login_name_field.focus();
  }
});

modal_close_write_us.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal_write_us.classList.remove("modal-show");
  modal_write_us.classList.remove("modal-error");
});

write_us_form.addEventListener("submit", function (evt) {
  console.log("sdfsdf");
  if (!login_email_field.value || !login_name_field.value || !message_text_field.value) {
    evt.preventDefault();
    modal_write_us.classList.remove("modal-error");
    modal_write_us.offsetWidth = modal_write_us.offsetWidth;
    modal_write_us.classList.add("modal-error");
  } else {
    if (is_storage_support){
      localStorage.setItem("login-name", login_name_field.value);
      localStorage.setItem("login-email", login_email_field.value);
      localStorage.setItem("message-text", "");
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal_write_us.classList.contains("modal-show")) {
      evt.preventDefault();
      modal_write_us.classList.remove("modal-show");
      modal_write_us.classList.remove("modal-error");
    }
  }
});
