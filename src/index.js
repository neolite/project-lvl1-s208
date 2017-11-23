import readlineSync from 'readline-sync';

export const echoName = () => {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
};

export const welcomeMessage = () => console.log('Welcome to the Brain Games!');
