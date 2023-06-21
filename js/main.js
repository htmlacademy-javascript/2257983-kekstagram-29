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

//Генератор фото
const dataPhoto = () => ({
  id: random(1, 25), //Должен быть счетчик
  url: `photos/${random(1, 25)}.jpg`, //Цифры не должны повторяться
  desription: randomElement(DESCRIPTION),
  likes: random(15, 200),

  comments: {
    id: random(1, 100), //id не повторяются
    avatar: `img/avatar-${random(1, 6)}.svg`,
    message: randomElement(MESSAGE),
    name: randomElement(NAMES),
  },
});

const arrayPhoto = Array.from({length: 25}, dataPhoto);
