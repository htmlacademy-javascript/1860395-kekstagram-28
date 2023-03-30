import {getRandomInteger} from './functions.js';

const names = [
  'Игуана',
  'Алексей',
  'Зарина',
  'Чебурашка',
  'Петр',
  'Антуанетта'
];

const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const description = [
  '1',
  '2',
  '3',
  '4'
];

const finalCommentsCount = 25;

const createComment = () => {
  return {
    avatar: `img/avatar-${getRandomInteger(1, 6)}`,
    message: message[getRandomInteger(0, message.length -1)],
    name: names[getRandomInteger(0, names.length - 1)],
  };
};

const createRandomComments = () => {
  const quantityComments = [];
  const numberComments = getRandomInteger(1, 10);
  for (let i = 0; i <= numberComments; i++) {
    quantityComments[i] = createComment();
  }
  return quantityComments;
};
console.log(createRandomComments());

const createCard = () => {
  return {
    id: getRandomInteger(1, 25),
    url: `photos/${getRandomInteger(1, 25)}.jpg`,
    likes: getRandomInteger(15, 200),
    description: description[getRandomInteger(0, description.length - 1)],
    comments: createRandomComments()
  };
};

const allComments = Array.from({length: finalCommentsCount}, createCard);
console.log(allComments);
