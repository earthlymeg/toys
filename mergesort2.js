const merge = (arr1, arr2) => {
    //merge two arrays and return new array


    let newArr = [];
    let i = 0;
    let j = 0;
    //while we havent reached the end of either arrays   
    //compare first elements in arrays
      //if arr1 element is smaller, push into new arr
        //increment arr1 marker
      //else apply same logic to arr2
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
          newArr.push(arr1[i]);
          i++;
      } else {
          newArr.push(arr2[j]);
          j++;
      }    
    }   

    //while element is < arr1.len  
      //add elements to new arr
      //increment element

      while (i < arr1.length) {
          newArr.push(arr1[i]);
          i++;
      }

    //while element is < arr2.len  
      //add elements to new arr
      //increment element
      while (j < arr2.length) {
        newArr.push(arr2[j]);
        j++;
    }
    return newArr;

}

const mergeSort = (arr) => {
    //base case:
    //if arr is of length 1 return arr 
    if (arr.length === 1) return arr;

    //else splice the arr into left + right
    //call merge sort on left + right
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);

}

console.log(mergeSort([4,6,1,3,9]))