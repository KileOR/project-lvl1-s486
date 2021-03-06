import getRandomInt from '../utils';
import startGame from '..';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }

  return findGcd(num2, num1 % num2);
};

const getQuestionAnswerPair = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = `${findGcd(firstNumber, secondNumber)}`;

  return [question, answer];
};

export default () => startGame(getQuestionAnswerPair, description);
