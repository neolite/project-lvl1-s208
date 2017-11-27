import { getRandom, makeGame } from '..';

const isPrime = (num) => {
  const primeRange = Object.keys(Array.apply(0, Array(num - 2))).map(Number).map(i => i + 2);
  return primeRange.filter(n => num % n === 0).length === 0;
};


const primeGame = () => {
  const randomNumber = getRandom();
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return {
    question: `${randomNumber}`,
    answer,
  };
};

const gameWrapper = () => {
  makeGame(primeGame, 'Is this number prime?');
};

export default gameWrapper;
