import {pressEscButton} from './utils.js';

//Попап
const bigPicture = document.querySelector('.big-picture');
const escButton = document.querySelector('.big-picture__cancel');

//Содержимое попапа
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureComments = bigPicture.querySelector('.social__comment-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');

//Содержимое комментариев
const defaultComments = document.querySelector('.social__comments');
const commentElement = document.querySelector('.social__comment');

escButton.addEventListener('click', () => { //Закрываем фото по клику
  bigPicture.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => { //Закрываем фото по Esc
  if(pressEscButton(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
});

const renderBigPhoto = (data) => { //Создаем большое фото без комментариев
  bigPictureImage.src = data.url;
  bigPictureLikes.textContent = data.likes;
  bigPictureComments.textContent = data.comments.length;
  bigPictureDescription.textContent = data.description;
};

const renderOneComment = (element) => { //Создаем 1 комментарий
  const comment = commentElement.cloneNode(true);

  comment.querySelector('.social__picture').src = element.avatar;
  comment.querySelector('.social__picture').alt = element.name;
  comment.querySelector('.social__text').textContent = element.message;

  return comment;
};

const fillCommentsList = (data) => { //Перебираем массив для большего числа комментариев
  data.forEach((element) => {
    defaultComments.append(renderOneComment(element));
  });
};

const showBigPictures = (data) => { //Создаем функцию для открытия картинки с комментариями
  defaultComments.innerHTML = '';
  renderBigPhoto(data);
  fillCommentsList(data.comments);
};

export {showBigPictures};
