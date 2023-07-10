import {arrayPhoto} from './create-photo.js';
import {showBigPictures} from './big-photo.js';

const createPictureList = (array) => {
  const pictureTemplate = document.querySelector('#picture').content;
  const pictureTemplateElement = pictureTemplate.querySelector('.picture');
  const pictureListElement = document.querySelector('.pictures');
  const bigPicture = document.querySelector('.big-picture');
  const pictureListFragment = document.createDocumentFragment();

  array.forEach((photo) => {
    const newElement = pictureTemplateElement.cloneNode(true);
    const img = newElement.querySelector('.picture__img');

    img.src = photo.url;
    img.alt = photo.description;
    newElement.querySelector('.picture__likes').textContent = photo.likes;
    newElement.querySelector('.picture__comments').textContent = photo.comments.length;
    pictureListFragment.appendChild(newElement);

    newElement.addEventListener ('click', () => { //Открываем фото
      bigPicture.classList.remove('hidden');
      showBigPictures(photo);
      
    });
  });

  pictureListElement.appendChild(pictureListFragment);
};

createPictureList(arrayPhoto);

export {createPictureList};
