let slide_perforators = document.querySelector('.slide-perforators');
let slide_drills = document.querySelector('.slide-drills');
let control_left = document.querySelector('.control-left');
let control_right = document.querySelector('.control-right');

control_left.onclick = function() {
  slide_perforators.classList.toggle('slide');
  slide_perforators.classList.toggle('topics-slide-current');
  slide_drills.classList.toggle('slide');
  slide_drills.classList.toggle('topics-slide-current');
};

control_right.onclick = function() {
  slide_perforators.classList.toggle('slide');
  slide_perforators.classList.toggle('topics-slide-current');
  slide_drills.classList.toggle('slide');
  slide_drills.classList.toggle('topics-slide-current');
};
