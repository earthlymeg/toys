const productOfArray = (arr) => {
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

//if arr.length == 0
//return

//return arr[0] * productOfArray(arr.slice(1))

  if (arr.length === 0) {
      return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3,10]))
