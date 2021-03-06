var cartCounter = 10;
var bookmarksCounter = 0;
var addToCartСollection = document.querySelectorAll('.add-to-cart');
var addToBookmarksСollection = document.querySelectorAll('.add-to-bookmarks');
var cart = document.querySelector('.cart');
var bookmarks = document.querySelector('.bookmarks');
var modalAddedCart = document.querySelector('.modal-added-cart');
var modalCloseMessage = modalAddedCart.querySelector('.modal-close-message');
var closeMessage = modalAddedCart.querySelector('.close-message');

for (addToBookmarksElement of addToBookmarksСollection) {
  addToBookmarksElement.addEventListener('click', function (evt) {
    evt.preventDefault();
    bookmarksCounter += 1;
    if (bookmarksCounter == 1) {
      bookmarks.classList.add('bookmarks-active');
    }
    bookmarks.textContent = 'Закладки: ' + bookmarksCounter;
  });
}

for (addToCartElement of addToCartСollection) {
  addToCartElement.addEventListener('click', function (evt) {
    evt.preventDefault();
    cartCounter += 1;
    if (cartCounter == 1) {
      cart.classList.add('cart-active');
    }
    cart.textContent = 'Корзина ' + cartCounter;
    modalAddedCart.classList.add('modal-show');
  });
}

modalCloseMessage.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalAddedCart.classList.remove('modal-show');
});

closeMessage.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalAddedCart.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalAddedCart.classList.contains('modal-show')) {
      evt.preventDefault();
      modalAddedCart.classList.remove('modal-show');
    }
  }
});
