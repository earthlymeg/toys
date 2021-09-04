function longggg (str) {

//in=string
//out=int, length of longest unique substr 

    //create storage obj
    let storage = {};
    //let i = 0
    let i = 0;
    //get j = 1
    let j = 0;
    //let longest = 0
    let longest = 0;
    //storage[i] = 1
    // storage[str[i]] = 1;

    //while i < str.length
    while (j <= str.length) {
        let current = str[j];
        
        
        // console.log('storage, current', storage, current)
        if (storage[current]) {

            let tempLong = Object.keys(storage).length;
            if (tempLong > longest) {
                longest = tempLong;
            }
            storage = {};
            i++;
            j = i;
            

        } else {
            console.log(current)
            if (current) {
                storage[current] = 1;
                j++;
            }
        }
        if (j === str.length - 1) {
            console.log('j is long', storage)
        }

        if (Object.keys(storage).length === str.length) {
            
            longest = str.length;
            
        }
    // console.log(storage)

    }  
    console.log(longest)
   return longest;

}

let ex = "aab";
console.log(longggg(ex))