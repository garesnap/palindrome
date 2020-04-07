const button = document.querySelector('#submit');
const displayAnswer = document.querySelector('#answer');
let answerText = '';
let answer = '';


function palindrome(str) {
    let pureString = str.replace(/\W/g, '')
    pureString = pureString.toLowerCase();
    pureString = pureString.replace(/[^0-9a-z]/gi, '');
    let regArray = pureString.split('');
    if(regArray.join() === regArray.reverse().join()){
        return true;
    }
    else{
        return false;
    }
  }

button.addEventListener('click', () => {
  const textInput = document.querySelector('#textInput');
  console.log(textInput.value);
  answer = textInput.value;
  if(!answer){
    answerText = '';
  }
  else if(palindrome(answer)){
    answerText = `'${answer}' is a palindrome.`;
  }
  else{
    answerText = `'${answer}' is not a palindrome.`;
  }
  displayAnswer.textContent = answerText;
});

  
console.log(palindrome('_eye'));
  //console.log(palindrome("hey buddy"));

