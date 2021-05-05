const insertionSort = (arr) => {

    for (let i = 1; i < arr.length; i++) {
        let currentElement = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentElement; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentElement;
    }
    return arr;
}

insertionSort([72,-1,4,2,18,-5])