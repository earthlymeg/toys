const merge = (arr1, arr2) => {

  //what if they're different lengths?
  
  let left = 0;
  let right = 0;
  let newArr = [];


  //else push arr[right] into new arr
    //right++
    
  //if we reach the end of one array first, push the rest of the other arr into the new arr   
  while (left < arr1.length && right < arr2.length) {
      if (arr1[left] < arr2[right]) {
        newArr.push(arr1[left]);
        left++;
      } else {
          newArr.push(arr2[right]);
          right++;
      }

  }

  while (left < arr1.length) {
      newArr.push(arr1[left]);
      left++;
  }
  while (right < arr2.length) {
    newArr.push(arr1[right]);
    right++;
}
  console.log(newArr)

}

const mergeSort = (arr) => {
    if (arr.length <= 1 ) {
        console.log('returning', arr)
        return arr;
    }

    else {
      let left = arr.slice(0, arr.length/2);
      let right = arr.slice(arr.length/2)
      console.log('L+R', left, right)
      mergeSort(left);
      mergeSort(right)
    }
}



let first = [1,3,5,6,8,9];
// let second = [-1]
mergeSort(first);