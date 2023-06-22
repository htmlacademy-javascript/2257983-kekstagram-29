const DESCRIPTION = [
  'Это я отдыхаю у моря',
  'Моя прекрасная жизнь',
  'Бегу на работу, а что делаете вы?',
  'КотЭЭЭЭ',
  'Наконец-то закончил работу, пора домой',
  'Зимний сад',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Николай',
  'Маруся',
  'Егор',
  'Антоха',
  'Юлия',
  'Мария',
];

//Генератор случайный чисел
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomElement = (elements) => elements[random(0, elements.length - 1)];

//Генератор комментариев
const generateComments = (_, index) => ({
  id: index + 1,
  avatar: `img/avatar-${random(1, 6)}.svg`,
  message: randomElement(MESSAGE),
  name: randomElement(NAMES),
});

const comments = Array.from({length: 25}, generateComments);

//Генератор фото
const generateDatasPhoto = (_, index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  desription: randomElement(DESCRIPTION),
  likes: random(15, 200),
  comment: randomElement(comments),
});

const arrayPhoto = Array.from({length: 25}, generateDatasPhoto);

console.log(arrayPhoto);
