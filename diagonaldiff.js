function diagonalDifference(arr) {


    let d1 = getd1vals(arr);
    let d2 = getd2vals(arr);
    let sum1 = 0;
    let sum2 = 0;
    d1.forEach(int => sum1 += int);
    d2.forEach(int => sum2 += int);


    return Math.abs(sum1 - sum2);

}


function getd1vals(arr) {
    let vals = [];
    let innr = 0;
    let outer = 0;
    while (outer < arr.length) {
        vals.push(arr[outer][innr]);
        outer++;
        innr++;
    }

    return vals;
}
function getd2vals(arr) {
    let vals = [];
    let innr = arr.length - 1;
    let outer = 0;
    while (outer < arr.length) {
        vals.push(arr[outer][innr]);
        outer++;
        innr--;
    }

    return vals;
}

let ex = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]

console.log(diagonalDifference(ex))