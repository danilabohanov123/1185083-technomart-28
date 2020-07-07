var writeUsLink = document.querySelector('.write-us-link');
var modalWriteUs = document.querySelector('.modal-write-us');
var modalCloseForm = modalWriteUs.querySelector('.modal-close-form');
var writeUsForm = modalWriteUs.querySelector('.write-us-form');
var loginEmailField = modalWriteUs.querySelector('.login-email-field');
var loginNameField = modalWriteUs.querySelector('.login-name-field');
var messageTextField = modalWriteUs.querySelector('.message-text-field');

var isStorageSupport = true;
var storageName = '';
var storageEmail = '';

try {
  storageName = localStorage.getItem('login-name');
  storageEmail = localStorage.getItem('login-email');
} catch (err) {
  isStorageSupport = false;
}

writeUsLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.add('modal-show');

  if (StorageName) {
    loginNameField.value = storageName;
    loginEmailField.value = storageEmail;
    messageTextField.focus();
  } else {
    loginNameField.focus();
  }
});

modalCloseForm.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.remove('modal-show');
  modalWriteUs.classList.remove('modal-error');
});

writeUsForm.addEventListener('submit', function (evt) {
  if (!loginEmailField.value || !loginNameField.value || !messageTextField.value) {
    evt.preventDefault();
    modalWriteUs.classList.remove('modal-error');
    modalWriteUs.offsetWidth = modalWriteUs.offsetWidth;
    modalWriteUs.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login-name', loginNameField.value);
      localStorage.setItem('login-email', loginEmailField.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalWriteUs.classList.contains('modal-show')) {
      evt.preventDefault();
      modalWriteUs.classList.remove('modal-show');
      modalWriteUs.classList.remove('modal-error');
    }
  }
});
