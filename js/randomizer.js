//Генератор случайный чисел
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomElement = (elements) => elements[random(0, elements.length - 1)];

export {random, randomElement};
