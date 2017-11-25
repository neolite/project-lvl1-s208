import { getRandom, getAnswer, gameFactory } from '..';

const plus = a => b => a + b;
const minus = a => b => a - b;
const multiply = a => b => a * b;

const calcExpression = (op, a, b) => {
  switch (op) {
    case '+':
      return plus(a)(b);
    case '-':
      return minus(a)(b);
    case '*':
      return multiply(a)(b);
    default:
      return false;
  }
};

const calcGame = () => {
  const ops = ['+', '-', '*'];
  const op = ops[getRandom(0, 2)];
  const secondNumber = getRandom(1, 10);
  const firstNumber = getRandom(1, 10);
  const expString = `${firstNumber} ${op} ${secondNumber}`;
  console.log(`Question: ${expString}`);
  return {
    answer: parseInt(getAnswer(), 10),
    result: calcExpression(op, firstNumber, secondNumber),
  };
};


const gameWrapper = () => {
  gameFactory(calcGame, 'What is the result of the expression?');
};

export default gameWrapper;
