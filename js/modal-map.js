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
