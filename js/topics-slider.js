let slidePerforators = document.querySelector('.slide-perforators');
let slideDrills = document.querySelector('.slide-drills');
let controlLeft = document.querySelector('.control-left');
let controlRight = document.querySelector('.control-right');

controlLeft.addEventListener("click", function (evt) {
  evt.preventDefault();
  slidePerforators.classList.toggle('slide');
  slidePerforators.classList.toggle('topics-slide-current');
  slideDrills.classList.toggle('slide');
  slideDrills.classList.toggle('topics-slide-current');
});

controlRight.addEventListener("click", function (evt) {
  evt.preventDefault();
  slidePerforators.classList.toggle('slide');
  slidePerforators.classList.toggle('topics-slide-current');
  slideDrills.classList.toggle('slide');
  slideDrills.classList.toggle('topics-slide-current');
});
