const factorial = (num) => {
  
    //returns 4*3*2*1
    //base case
  if (num === 1) {
      return 1;
  } else {
      return num * factorial(num - 1);
  }
// return (num !== 1 ? factorial(num - 1) : 1);

}

console.log(factorial(5))