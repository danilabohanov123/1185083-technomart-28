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
