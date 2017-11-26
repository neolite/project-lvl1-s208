import { getRandom, gameFactory } from '..';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) { if (num % i === 0) return 'no'; }
  return num !== 1 ? 'yes' : 'no';
};

const primeGame = () => {
  const randomNumber = getRandom();
  const answer = isPrime(randomNumber);
  return {
    question: `${randomNumber}`,
    answer: String(answer),
  };
};

const gameWrapper = () => {
  gameFactory(primeGame, 'Is this number prime?');
};

export default gameWrapper;
