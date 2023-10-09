function range(start, end, step = 1) {
    let result = [];
    if (step > 0) {
      for (let i = start; i <= end; i += step) {
        result.push(i);
      }
    } else if (step < 0) {
      for (let i = start; i >= end; i += step) {
        result.push(i);
      }
    }
    return result;
  }
  
  function sum(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(range(1, 10))); 
  console.log(range(1, 10, 2)); 
  console.log(range(5, 2, -1)); 
  