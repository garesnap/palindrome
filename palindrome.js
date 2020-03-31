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
  
  
  
console.log(palindrome('_eye'));


