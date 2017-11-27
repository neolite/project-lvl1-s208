import { getRandom, makeGame } from '..';

const isEven = n => ((n % 2) === 0 ? 'yes' : 'no');

const evenGame = () => {
  const randomNumber = getRandom();
  const answer = isEven(randomNumber);
  return {
    question: `${randomNumber}`,
    answer: String(answer),
  };
};

const gameWrapper = () => {
  makeGame(evenGame, 'Answer "yes" if number even otherwise answer "no".');
};

export default gameWrapper;
