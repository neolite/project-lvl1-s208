import readlineSync from 'readline-sync';

export const welcomeMessage = () => console.log('Welcome to the Brain Games!');
export const getName = () => readlineSync.question('May I have your name?: ');
export function getRandom(min = 1, max = 100) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}
export const getAnswer = () => readlineSync.question('Your answer?: ');

export const gameFactory = (gameContainer, initialMessage = '') => {
  welcomeMessage();
  console.log(initialMessage);
  const name = getName();
  console.log(`Hello, ${name}`);
  if (typeof gameContainer === 'undefined') return;
  for (let i = 0; i < 3; i += 1) {
    const { answer, result } = gameContainer();
    if (answer === result) {
      console.log('Correct');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
