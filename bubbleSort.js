const bubbleSort = (arr) => {

  for (let i = arr.length; i > 0; i--) {
    //define k = 0    
    
    for (let j = 0; j < i - 1; j++) {
        console.log(arr, 'comparing:', arr[j], arr[j+1])
         
          if (arr[j+1] < arr[j]) {
              let temp = arr[j+1];
              arr[j+1] = arr[j];
              arr[j] = temp;
          } 
      }
      console.log('ONE PASS')
  }
  console.log(arr)
  return arr;
}

bubbleSort([12,8,7,-4,-1,18,3,1,10,4])
