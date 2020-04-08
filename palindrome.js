const button = document.querySelector('#submit');
const displayAnswer = document.querySelector('#answer');
const input = document.getElementById('textInput');
let answerText = '';
let answer = '';

function palindrome(str) {
  let pureString = str.replace(/\W/g, '');
  pureString = pureString.toLowerCase();
  pureString = pureString.replace(/[^0-9a-z]/gi, '');
  let regArray = pureString.split('');
  if (regArray.join() === regArray.reverse().join()) {
    return true;
  } else {
    return false;
  }
}

input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    button.click();
  }
});

button.addEventListener('click', () => {
  const textInput = document.querySelector('#textInput');
  answer = textInput.value;
  if (!answer) {
    answerText = '';
  } else if (palindrome(answer)) {
    answerText = `'${
      answer.charAt(0).toUpperCase() + answer.slice(1)
    }' is a palindrome.`;
  } else {
    answerText = `'${
      answer.charAt(0).toUpperCase() + answer.slice(1)
    }' is not a palindrome.`;
  }
  displayAnswer.textContent = answerText;
});
