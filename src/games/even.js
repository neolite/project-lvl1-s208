import { getRandom, getAnswer, gameFactory } from '..';

const isEven = n => ((n % 2) === 0 ? 'yes' : 'no');

const evenGame = () => {
  const randomNumber = getRandom();
  console.log(`Question: ${randomNumber}`);
  return {
    answer: getAnswer(),
    result: isEven(randomNumber),
  };
};

const gameWrapper = () => {
  gameFactory(evenGame, 'Answer "yes" if number even otherwise answer "no".');
};

export default gameWrapper;
