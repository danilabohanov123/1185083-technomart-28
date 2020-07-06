var writeUsLink = document.querySelector(".write-us-link");
var modalWriteUs = document.querySelector(".modal-write-us");
var modalCloseWriteUs = modal_write_us.querySelector(".modal-close-write-us");
var writeUsForm = modal_write_us.querySelector(".write-us-form");
var loginEmailField = modal_write_us.querySelector(".login-email-field");
var loginNameField = modal_write_us.querySelector(".login-name-field");
var messageTextField = modal_write_us.querySelector(".message-text-field");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("login-name");
  storageEmail = localStorage.getItem("login-email");
} catch (err) {
  isStorageSupport = false;
}

writeUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.add("modal-show");

  if (storage_name) {
    loginNameField.value = storageName;
    loginEmailField.value = storageEmail;
    messageTextField.focus();
  } else {
    loginNameField.focus();
  }
});

modalCloseWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.remove("modal-show");
  modalWriteUs.classList.remove("modal-error");
});

writeUsForm.addEventListener("submit", function (evt) {
  console.log("sdfsdf");
  if (!loginEmailField.value || !loginNameField.value || !messageTextField.value) {
    evt.preventDefault();
    modalWriteUs.classList.remove("modal-error");
    modalWriteUs.offsetWidth = modalWriteUs.offsetWidth;
    modalWriteUs.classList.add("modal-error");
  } else {
    if (is_storage_support){
      localStorage.setItem("login-name", loginNameField.value);
      localStorage.setItem("login-email", loginEmailField.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalWriteUs.classList.contains("modal-show")) {
      evt.preventDefault();
      modalWriteUs.classList.remove("modal-show");
      modalWriteUs.classList.remove("modal-error");
    }
  }
});
