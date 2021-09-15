function lonelyinteger(a) {
    // Write your code here


    //in=== array of ints
    //out = the SINGLE element that accurs ONE time

    let store = {};

    a.forEach(int => {
        store[int] ? store[int] += 1 : store[int] = 1;
    })


    for (let i = 0; i < Object.keys(store).length; i++) {
        let current = Object.keys(store)[i];
        if (store[current] === 1) {
            return current;
        }
    }
}

let a = [1,2,3,4,3,2,1];
console.log(lonelyinteger(a))