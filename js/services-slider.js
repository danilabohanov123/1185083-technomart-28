let services_slide_delivery = document.querySelector('.delivery');
let services_slide_guarantee = document.querySelector('.guarantee');
let services_slide_credit = document.querySelector('.credit');
let services_control_delivery = document.querySelector('.delivery-control');
let services_control_guarantee = document.querySelector('.guarantee-control');
let services_control_credit = document.querySelector('.credit-control');

services_control_delivery.onclick = function() {
  services_slide_guarantee.classList.remove('slide-current');
  services_slide_credit.classList.remove('slide-current');
  services_slide_guarantee.classList.add('slide');
  services_slide_credit.classList.add('slide');
  services_slide_delivery.classList.remove('slide');
  services_slide_delivery.classList.add('slide-current');

  services_control_guarantee.classList.remove('services-control-current');
  services_control_credit.classList.remove('services-control-current');
  services_control_delivery.classList.add('services-control-current');
};

services_control_guarantee.onclick = function() {
  services_slide_delivery.classList.remove('slide-current');
  services_slide_credit.classList.remove('slide-current');
  services_slide_delivery.classList.add('slide');
  services_slide_credit.classList.add('slide');
  services_slide_guarantee.classList.remove('slide');
  services_slide_guarantee.classList.add('slide-current');

  services_control_delivery.classList.remove('services-control-current');
  services_control_credit.classList.remove('services-control-current');
  services_control_guarantee.classList.add('services-control-current');
};

services_control_credit.onclick = function() {
  services_slide_delivery.classList.remove('slide-current');
  services_slide_guarantee.classList.remove('slide-current');
  services_slide_delivery.classList.add('slide');
  services_slide_guarantee.classList.add('slide');
  services_slide_credit.classList.remove('slide');
  services_slide_credit.classList.add('slide-current');

  services_control_delivery.classList.remove('services-control-current');
  services_control_guarantee.classList.remove('services-control-current');
  services_control_credit.classList.add('services-control-current');
};
