import readlineSync from 'readline-sync';

export default function echoName () {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
}