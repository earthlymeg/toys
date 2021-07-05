// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

var isPalindrome = function(x) {

    //edge cases
      //if x is length 1, return true
      //if x is null, return null
  
  
    //turn x to arr and store in var
    // if arr.reverse is same as stored arr
      //return true
    //else return false   

  var digits = x.toString().split("");
  
  let i = 0
  let j = digits.length - 1;

  while (i < digits.length) {
      if (digits[i] !== digits[j]) {
          return false;
      }
      i++;
      j--;

  }
  
  return true;


};

console.log(isPalindrome(10))