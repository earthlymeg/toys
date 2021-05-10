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


let first = [1,3,5]
let second = [-1]
merge(first, second)