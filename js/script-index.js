var slidePerforators = document.querySelector('.slide-perforators');
var slideDrills = document.querySelector('.slide-drills');
var controlLeft = document.querySelector('.control-left');
var controlRight = document.querySelector('.control-right');
var indicatorActivityCollection = document.querySelectorAll('.indicator');

controlLeft.addEventListener('click', function (evt) {
  evt.preventDefault();
  slidePerforators.classList.toggle('slide');
  slidePerforators.classList.toggle('topics-slide-current');
  slideDrills.classList.toggle('slide');
  slideDrills.classList.toggle('topics-slide-current');
  for (indicatorActivity of indicatorActivityCollection) {
    indicatorActivity.classList.toggle('indicator-active');
  }
});

controlRight.addEventListener('click', function (evt) {
  evt.preventDefault();
  slidePerforators.classList.toggle('slide');
  slidePerforators.classList.toggle('topics-slide-current');
  slideDrills.classList.toggle('slide');
  slideDrills.classList.toggle('topics-slide-current');
  for (indicatorActivity of indicatorActivityCollection) {
    indicatorActivity.classList.toggle('indicator-active');
  }
});

var servicesSlideDelivery = document.querySelector('.delivery');
var servicesSlideGuarantee = document.querySelector('.guarantee');
var servicesSlideCredit = document.querySelector('.credit');
var servicesControlDelivery = document.querySelector('.delivery-control');
var servicesControlGuarantee = document.querySelector('.guarantee-control');
var servicesControlCredit = document.querySelector('.credit-control');

servicesControlDelivery.addEventListener('click', function (evt) {
  evt.preventDefault();
  servicesSlideGuarantee.classList.remove('slide-current');
  servicesSlideCredit.classList.remove('slide-current');
  servicesSlideGuarantee.classList.add('slide');
  servicesSlideCredit.classList.add('slide');
  servicesSlideDelivery.classList.remove('slide');
  servicesSlideDelivery.classList.add('slide-current');

  servicesControlGuarantee.classList.remove('services-control-current');
  servicesControlCredit.classList.remove('services-control-current');
  servicesControlDelivery.classList.add('services-control-current');
});

servicesControlGuarantee.addEventListener('click', function (evt) {
  evt.preventDefault();
  servicesSlideDelivery.classList.remove('slide-current');
  servicesSlideCredit.classList.remove('slide-current');
  servicesSlideDelivery.classList.add('slide');
  servicesSlideCredit.classList.add('slide');
  servicesSlideGuarantee.classList.remove('slide');
  servicesSlideGuarantee.classList.add('slide-current');

  servicesControlDelivery.classList.remove('services-control-current');
  servicesControlCredit.classList.remove('services-control-current');
  servicesControlGuarantee.classList.add('services-control-current');
});

servicesControlCredit.addEventListener('click', function (evt) {
  evt.preventDefault();
  servicesSlideDelivery.classList.remove('slide-current');
  servicesSlideGuarantee.classList.remove('slide-current');
  servicesSlideDelivery.classList.add('slide');
  servicesSlideGuarantee.classList.add('slide');
  servicesSlideCredit.classList.remove('slide');
  servicesSlideCredit.classList.add('slide-current');

  servicesControlDelivery.classList.remove('services-control-current');
  servicesControlGuarantee.classList.remove('services-control-current');
  servicesControlCredit.classList.add('services-control-current');
});

var navigationMapLink = document.querySelector('.navigation-map');
var modalMap = document.querySelector('.modal-map');
var modalCloseMap = modalMap.querySelector('.modal-close-map');

navigationMapLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalMap.classList.add('modal-show');
});

modalCloseMap.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalMap.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalMap.classList.contains('modal-show')) {
      evt.preventDefault();
      modalMap.classList.remove('modal-show');
    }
  }
});

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

  if (storage_name) {
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
    if (is_storage_support) {
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
