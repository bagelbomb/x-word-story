const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const words = require('./words.json');

function prompt(promptStr) {
  return new Promise(resolve => {
    readline.question(promptStr, input => resolve(input));
  });
}

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

async function gameLoop(sentence = '') {
  while (true) {
    const nextWord = await prompt(sentence);
    const lastLetter = nextWord[nextWord.length - 1];

    if ('.!?'.includes(lastLetter)) {
      return;
    }

    sentence += nextWord + (lastLetter === ' ' ? '' : ' ') + getRandomWord();
  }
}

async function menuLoop() {
  while (true) {
    console.log('P = Player Starts; C = Computer Starts; E = Exit');
    const choice = await prompt('> ');

    if (['p', 'P', 'player', 'Player'].includes(choice)) {
      await gameLoop();
    } else if (['c', 'C', 'computer', 'Computer'].includes(choice)) {
      await gameLoop(capitalize(getRandomWord()));
    } else if (['e', 'E', 'exit', 'Exit'].includes(choice)) {
      break;
    }
  }

  readline.close();
}

menuLoop();
