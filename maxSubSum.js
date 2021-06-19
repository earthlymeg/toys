var maxSum = (arr, num) => {

    //find the largest sum of consecutive digits in array of length n
    let tempSum = 0;
    for (let t = 0; t < num; t++) {
        tempSum += arr[t];
    }
    let maxSum = 0;
    let i = 0;
    let j = num - 1;

    while (i <= arr.length - num) {
        if (tempSum > maxSum) maxSum = tempSum;
        tempSum = tempSum - arr[i] + arr[j + 1];
        i++;
        j++;
    }

    console.log(maxSum)


}
    //    i          j
let sub = [100,100,100,500,900,-100,-200];
maxSum(sub, 3);

//output--> 34


