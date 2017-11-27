import { getRandom, makeGame } from '..';

const getProgression = () => {
  const step = getRandom(1, 10);
  let progressionString = '';
  let count = 0;
  const indexOfHidden = getRandom(0, 9);
  let hiddenNumber = 0;
  for (let i = 0; i < 10; i += 1) {
    count += step;
    if (indexOfHidden === i) {
      hiddenNumber = String(count);
      progressionString += '.. ';
    } else {
      progressionString += `${count} `;
    }
  }
  return { progressionString, hiddenNumber };
};

const progressionGame = () => {
  const { progressionString, hiddenNumber } = getProgression();
  return {
    question: progressionString,
    answer: hiddenNumber,
  };
};

const gameWrapper = () => {
  makeGame(progressionGame, 'What number is missing in this progression?');
};

export default gameWrapper;
