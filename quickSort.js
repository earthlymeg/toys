const pivot = (arr, start=0, end=arr.length - 1) => {
  
  let pivot = arr[start];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
      let element = i;
      if (arr[element] < pivot) {
          pivotIndex++;
          [arr[element], arr[pivotIndex]] = [arr[pivotIndex], arr[element]];
      }
  }
  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
  return pivotIndex;

}




const quickSort = (arr, left = 0, right = arr.length) => {

    if (left < right) {
       
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}    


let temp =[38, 7, 23, 22, 6, 39, 13, 24, 27, 15, 16, 29, 14, 18, 32, 3, 5, 31, 0, 20, 11, 4, 1, 26, 21, 17, 35, 33, 12, 2, 34, 30, 25, 28, 37, 8, 36, 9, 19, 10]
console.log(quickSort(temp));

