'use strict';

// create vars to store elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // remember to use querySelectorAll cause there are more than 1 item with that class name.
const btnCloseModal = document.querySelector('.close-modal');

// create function to open/close modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// open modal
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
//open/close modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//use Escape to close modal
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
