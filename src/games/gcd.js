import { getRandom, getAnswer, gameFactory } from '..';

const calcGCD = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return calcGCD(m, k);
  }
  return Math.abs(n);
};

const gcdGame = () => {
  const firstNumber = getRandom();
  const secondNumber = getRandom();
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  return {
    answer: parseInt(getAnswer(), 10),
    result: calcGCD(firstNumber, secondNumber),
  };
};

const gameWrapper = () => {
  gameFactory(gcdGame, 'Find the greatest common divisor of given numbers.');
};

export default gameWrapper;
