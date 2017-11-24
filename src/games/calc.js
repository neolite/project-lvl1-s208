import { welcomeMessage, getName, getRandom, getAnswer } from '..';

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

export default () => {
  welcomeMessage();
  console.log('What is the result of the expression?');
  const name = getName();
  console.log(`Hello, ${name}`);
  const ops = ['+', '-', '*'];
  for (let i = 0; i < 3; i += 1) {
    const op = ops[getRandom(0, 2)];
    const firstNumber = getRandom(1, 10);
    const secondNumber = getRandom(1, 10);
    const expString = `${firstNumber} ${op} ${secondNumber}`;
    console.log(`Question: ${expString}`);
    const answer = parseInt(getAnswer(), 10);
    const result = calcExpression(op, firstNumber, secondNumber);
    if (answer === result) {
      console.log('Correct');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

