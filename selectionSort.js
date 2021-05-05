const selectionSort = (arr) => {

  for (let i = 0; i < arr.length; i++) {
      let smallest = i;
      for (let j = i; j < arr.length; j++) {
        if (arr[j] < arr[smallest]) smallest = j;
      }
      if (smallest !== i) [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
  }
  
    console.log(arr);
}

selectionSort([12,8,7,-4,-1,18,3,1,10,4])
