import { getRandom, gameFactory } from '..';

const getBalanced = (n) => {
  let digits = Array.isArray(n) ? n : Array.from(n.toString()).map(Number);
  const nMax = Math.max(...digits);
  const nMin = Math.min(...digits);
  if ((nMax - nMin) > 1) {
    digits[digits.indexOf(nMin)] = nMin + 1;
    digits[digits.indexOf(nMax)] = nMax - 1;
    digits = digits.sort((a, b) => a - b);
    return getBalanced(digits);
  }
  return Array.isArray(n) ? n.reduce((el, acc) => el.toString() + acc) : n;
};

const balanceGame = () => {
  const randomNumber = getRandom(1, 1000);
  const answer = getBalanced(randomNumber);
  return {
    question: `${randomNumber}`,
    answer,
  };
};

const gameWrapper = () => {
  gameFactory(balanceGame, 'Balance the given number.');
};

export default gameWrapper;
