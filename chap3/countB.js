function countBs(inputString) {
    return countChar(inputString, 'B');
  }
  
  function countChar(inputString, charToCount) {
    let count = 0;
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === charToCount) {
        count++;
      }
    }
    return count;
  }
  

  const string = "BeeBeeB";
  console.log(countBs(string)); 
  console.log(countChar(string, 'e'));
  