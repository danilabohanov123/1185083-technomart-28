var services_slide_delivery = document.querySelector('.delivery');
var services_slide_guarantee = document.querySelector('.guarantee');
var services_slide_credit = document.querySelector('.credit');
var services_control_delivery = document.querySelector('.delivery-control');
var services_control_guarantee = document.querySelector('.guarantee-control');
var services_control_credit = document.querySelector('.credit-control');

services_control_delivery.addEventListener("click", function (evt) {
  evt.preventDefault();
  services_slide_guarantee.classList.remove('slide-current');
  services_slide_credit.classList.remove('slide-current');
  services_slide_guarantee.classList.add('slide');
  services_slide_credit.classList.add('slide');
  services_slide_delivery.classList.remove('slide');
  services_slide_delivery.classList.add('slide-current');

  services_control_guarantee.classList.remove('services-control-current');
  services_control_credit.classList.remove('services-control-current');
  services_control_delivery.classList.add('services-control-current');
});

services_control_guarantee.addEventListener("click", function (evt) {
  evt.preventDefault();
  services_slide_delivery.classList.remove('slide-current');
  services_slide_credit.classList.remove('slide-current');
  services_slide_delivery.classList.add('slide');
  services_slide_credit.classList.add('slide');
  services_slide_guarantee.classList.remove('slide');
  services_slide_guarantee.classList.add('slide-current');

  services_control_delivery.classList.remove('services-control-current');
  services_control_credit.classList.remove('services-control-current');
  services_control_guarantee.classList.add('services-control-current');
});

services_control_credit.addEventListener("click", function (evt) {
  evt.preventDefault();
  services_slide_delivery.classList.remove('slide-current');
  services_slide_guarantee.classList.remove('slide-current');
  services_slide_delivery.classList.add('slide');
  services_slide_guarantee.classList.add('slide');
  services_slide_credit.classList.remove('slide');
  services_slide_credit.classList.add('slide-current');

  services_control_delivery.classList.remove('services-control-current');
  services_control_guarantee.classList.remove('services-control-current');
  services_control_credit.classList.add('services-control-current');
});
