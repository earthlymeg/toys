// First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
// Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .

function vowelsAndConsonants(s) {
    //printe each vowel on new line
    //print each consonant

    //iterate over string 
    //if current letter is a vowel
    //print current letter
    //else store in array
    //after looping through string
    //loop through arr and print
    let consonants = [];
    for (let letter in s) {
      let current = s[letter];  
      if (vowelTest(current)) {
        console.log(current);
      } else {
          consonants.push(current);
      }
    }

    for (let letter in consonants) {
        let current = consonants[letter];
        console.log(current);
    }




}

function vowelTest(letter) {
    return (/^[aeiou]$/i).test(letter);
}

console.log(vowelsAndConsonants('javascriptloops'))
// expect
