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
