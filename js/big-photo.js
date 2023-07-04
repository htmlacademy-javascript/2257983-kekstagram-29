import {createPictureList} from './miniatures.js';
import {pressEscButton} from './utils.js';

//Попап
const popUp = document.querySelector('.big-picture');
const miniPicture = document.querySelectorAll('.picture');
const escButton = document.querySelector('.big-picture__cancel');

//Содержимое попапа
const bigPictureImage = document.querySelector('.big-picture__img img');
const bigPictureLikes = document.querySelector('.likes-count');

miniPicture.forEach((photo) => { //Открываем фото
  photo.addEventListener ('click', () => {
    popUp.classList.remove('hidden');
  });
});

escButton.addEventListener('click', () => { //Закрываем фото по клику
  popUp.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => { //Закрываем фото по Esc
  if(pressEscButton(evt)) {
    evt.preventDefault();
    popUp.classList.add('hidden');
  }
});
