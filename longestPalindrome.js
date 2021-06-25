
 var longestPalindrome = function(s) {

    if (s.length <= 1) {
        return s; 
    }

    let i = 0;
    let j = 1;
    let longest = '';
    
    while (i < s.length && j <= s.length) {
      
      let temp = s.substr(i,j);
      if (temp.split("").reverse().join("") === temp) {
          if (temp.length > longest.length) {
              longest = temp;
          }
      }
      if (j === s.length) {
        i++;
        j = 1;
      } else {
        j++;
      }
      
    }
  return longest;
};

console.log(longestPalindrome("abcdbbfcbaabcdbbfcbaabcdbbfcbaabccccccccccdbbfcbaabcdbbfcbaabcdbbfcba"));


// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
// Example 3:

// Input: s = "a"
// Output: "a"
// Example 4:

// Input: s = "ac"
// Output: "a"