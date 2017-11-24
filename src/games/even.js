import { welcomeMessage, getName, getRandom, getAnswer } from '..';

const isEven = n => (n % 2) === 0;
const getStringAnswer = n => (n ? 'yes' : 'no');
const answerCorrect = (n, answer) => {
  switch (answer) {
    case 'yes':
      return isEven(n);
    case 'no':
      return !isEven(n);
    default:
      return false;
  }
};

export default () => {
  welcomeMessage();
  const name = getName();
  console.log('Answer "yes" if number even otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandom();
    console.log(`Question: ${randomNumber}`);
    const answer = getAnswer();
    const isCorrect = answerCorrect(randomNumber, answer);
    const stringAnswer = getStringAnswer(isEven(randomNumber));
    if (isCorrect) {
      console.log('Correct');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${stringAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
  }
};

