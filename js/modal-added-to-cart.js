var cartCounter = 10;
var addToCartСollection = document.querySelectorAll('.add-to-cart');
var cart = document.querySelector('.cart');
var modalAddedToCart = document.querySelector('.modal-added-to-cart');
var modalCloseMessage = modalAddedToCart.querySelector('.modal-close-message');
var closeMessage = modalAddedToCart.querySelector('.close-message');

for (addToCartElement of addToCartСollection){
  addToCartElement.addEventListener('click', function (evt) {
    evt.preventDefault();
    console.log(cartCounter);
    cartCounter += 1;
    if (cartCounter == 1) {
      cart.classList.add('cart-login');
    }
    cart.textContent = 'Корзина ' + cartCounter;
    modalAddedToCart.classList.add('modal-show');
  });
}

modalCloseMessage.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalAddedToCart.classList.remove('modal-show');
});

closeMessage.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalAddedToCart.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalAddedToCart.classList.contains('modal-show')) {
      evt.preventDefault();
      modalAddedToCart.classList.remove('modal-show');
    }
  }
});
