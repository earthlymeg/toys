function findMedian(arr) {
    // Write your code here
    //sort the array

    let sorted = arr.sort( (a,b) => a - b)
    // console.log(sorted)
    //if arr length is odd
      //find median index
        //floor arr.length/2
      //return el at median index

    if (sorted.length % 2 !== 0) {
        let medianIndex = Math.floor(sorted.length/2);
        return sorted[medianIndex];
    }
      
    //if sorted is even length
      //mid two elems = floor sorted.length/2 + floor sorted.length/2 + 1
      //find average of two elems
      //return average 
      if (sorted.length % 2 === 0)  {
        let el1Index = Math.floor( sorted.length / 2 );
        let el2Index = el1Index - 1;
        console.log(sorted[el1Index], sorted[el2Index])
        let average = (sorted[el1Index] + sorted[el2Index]) / 2;
        return average;
      }
        
}


let t1 = [0,1,2,4,6,5,3] // 3
let t2 = [0,1,2,4,5,6,7,8,9,10,11,12] //3

console.log(findMedian(t1))
console.log(findMedian(t2))

// 0 1 2 4 5 6
