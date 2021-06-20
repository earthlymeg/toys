var longestSubString = (str) => {


  //given a string, find longest substring of unique characters

  if (str.length < 1) return 0;
  let i = 0;
  let j = 0;
  let max = 0;
  let storage = {};
  storage[str[j]] = 1; 
  j++;
  //while j < str.length
  while (j < str.length) {
    let current = str[j];

    if (storage[current]) {
      let tempLength = Object.keys(storage).length;
      if (tempLength > max) max = tempLength;
      storage = {};
      i++;
      storage[str[i]] = 1;
      j = i + 1;      
      
    } else {
        storage[current] = 1;
        j++;
    }
  
  
    }
    return max > Object.keys(storage).length ? max : Object.keys(storage).length



}

let string = 'oooabcdefgoooooooo';

console.log(longestSubString(string));

//---> 'megan'