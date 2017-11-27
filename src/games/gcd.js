import { getRandom, gameMaker } from '..';

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
  const answer = calcGCD(firstNumber, secondNumber);
  return {
    question: `${firstNumber} ${secondNumber}`,
    answer: String(answer),
  };
};

const gameWrapper = () => {
  gameMaker(gcdGame, 'Find the greatest common divisor of given numbers.');
};

export default gameWrapper;
