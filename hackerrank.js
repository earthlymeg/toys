
function findSmallestRepeatedSubsequence(primary, secondary) {
    // Write your code here
    
    //check if primary repeated x times is secondary 
    
      
      //check initial
      let i = 0;


      while (i < primary.length) {
          if (primary[i] !== secondary[i]) {
            return -(Math.abs(secondary.length))
          }
          i++;
      }
      if (((secondary.length / primary.length) % 1) === 0) {
 
      
            let num = secondary.length / primary.length;
            let second = secondary.length / num;
            let string = secondary.substring(0, second);
            console.log('string,', string)

            return string.length;

        
      
    
      }
       else {
          return -(Math.abs(secondary.length))
     
       }

}

console.log(findSmallestRepeatedSubsequence('GT', 'CATCAT'))