import {arrayPhoto} from './create-photo.js';

const createPictureList = (array) => {
  const pictureTemplate = document.querySelector('#picture').content;
  const pictureTemplateElement = pictureTemplate.querySelector('.picture');
  const pictureListElement = document.querySelector('.pictures');
  const pictureListFragment = document.createDocumentFragment();

  array.forEach((url, description, likes, comments) => {
    const newElement = pictureTemplateElement.cloneNode(true);
    const img = pictureTemplateElement.querySelector('.picture__img');

    img.src = url;
    img.alt = description;
    newElement.querySelector('.picture__likes').textContent = likes;
    newElement.querySelector('.picture__comments').textContent = comments;
    pictureListFragment.appendChild(newElement);
  });

  pictureListElement.appendChild(pictureListFragment);

};

createPictureList(arrayPhoto);

export {createPictureList};
