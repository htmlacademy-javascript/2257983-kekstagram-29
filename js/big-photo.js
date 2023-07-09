import {pressEscButton} from './utils.js';

//Попап
const bigPicture = document.querySelector('.big-picture');
const escButton = document.querySelector('.big-picture__cancel');

//Содержимое попапа
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureComments = bigPicture.querySelector('.social__comment-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
// const socialComments = bigPicture.querySelector('.social__comments');

//Содержимое комментариев

escButton.addEventListener('click', () => { //Закрываем фото по клику
  bigPicture.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => { //Закрываем фото по Esc
  if(pressEscButton(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
});

const renderBigPhoto = (post) => {
  bigPictureImage.src = post.url;
  bigPictureLikes.textContent = post.likes;
  bigPictureComments.textContent = post.comments.length;
  bigPictureDescription.textContent = post.description;
};

export {renderBigPhoto};
