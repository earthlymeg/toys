var twoSum = (arr, target) => {

    // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    // You may assume that each input would have exactly one solution, and you may not use the same element twice.
    
    // You can return the answer in any order.
    let i = 0;
    let j = 1;

    console.log('leggo')
    while (i < arr.length) {
        // console.log(i, j, i+j)
        if (arr[i] + arr[j] === target) return [i, j];
        if (j === arr.length - 1) {
            i++;
            j = i + 1;
        } else {
            j++;
        }
    }
    
      //return null


      return null;
}

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

let input = [3,2,4];

console.log(twoSum(input, 6))