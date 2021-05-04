// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num){
    // add whatever parameters you deem necessary - good luck!  

  let tempFib = 1;  
  const helper = (number) => {
    if (number === num) {
        return 1;
    } else {
        tempFib += helper(number + 1)
    }
  }
  helper(1);
  return tempFib;

}

console.log(fib(4))

  //1 1 2 3 5 8 13 21