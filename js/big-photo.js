import {pressEscButton} from './utils.js';

const COMMENT_PER_CLICK = 5;
let defaultCommentCount = 0;

//Попап
const bigPicture = document.querySelector('.big-picture');
const escButton = document.querySelector('.big-picture__cancel');

//Содержимое попапа
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureComments = bigPicture.querySelector('.comments-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');

//Содержимое комментариев
const defaultComments = document.querySelector('.social__comments');
const commentElement = document.querySelector('.social__comment');
// const loadCommentsButton = document.querySelector('.comments-loader');

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

const renderOneComment = (data) => { //Создаем 1 комментарий
  const comment = commentElement.cloneNode(true);

  comment.querySelector('.social__picture').src = data.avatar;
  comment.querySelector('.social__picture').alt = data.name;
  comment.querySelector('.social__text').textContent = data.message;

  return comment;
};

const fillCommentsList = (data) => { //Создаем по 5 комментариев
  defaultCommentCount += COMMENT_PER_CLICK;

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < defaultCommentCount; i++) {
    const comment = renderOneComment(data.comments);
    fragment.append(comment);
  }

  defaultComments.append(fragment);
};

const showBigPictures = (data) => { //Создаем функцию для открытия картинки с комментариями
  defaultComments.innerHTML = ''; //Очищаем список комментариев
  renderBigPhoto(data); //Создаем большие фотографии
  fillCommentsList(data); //Показываем комментарии
};

export {showBigPictures};
