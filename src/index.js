import readlineSync from 'readline-sync';

export const echoName = () => {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
};

export const welcomeMessage = () => console.log('Welcome to the Brain Games!');
export const getName = () => readlineSync.question('May I have your name?: ');
export function getRandom(min = 1, max = 100) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}
export const getAnswer = () => readlineSync.question('Your answer?: ');
