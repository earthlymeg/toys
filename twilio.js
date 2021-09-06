function findMateches(codes, numbers) {

    const t9 = {
        2: ['A', 'B', 'C'],
        3: ['D', 'E', 'F'],
        4: ['G', 'H', 'I'],
        5: ['J', 'K', 'L'],
        6: ['M', 'N', 'O'],
        7: ['P', 'Q', 'R', 'S'],
        8: ['T', 'U', 'V'],
        9: ['W', 'X', 'Y', 'Z']

    };

    let matches = [];
    //iterate over codes
    //for each code
    //let possibleCode = ''
    //iterate over each letter and find that corresponding number in t9
    //t9 for each number, if value includes letter
    //add corresponding number to possible code
    //  if numbers includes possible code, add it to matches
    codes.forEach(code => {
        let possibleCode = '';
        for (let i = 0; i < code.length; i++) {
            let letter = code[i];
            Object.keys(t9).forEach(num => {
                if (t9[num].includes(letter)) {
                    possibleCode += num;
                }
            })
        }

        if (possibleCode.length === code.length)  matches.push(numbers.filter(x => x.includes(possibleCode)));

    })

    //ensure array is

    matches = matches.flat();
    let finalArr = [...new Set(matches)].sort((a,b) => a-b)

    return finalArr


}


let in1 = ['TWLO', 'CODE', 'HTCH'];
let in2 = ['+17474824380', '+14157088956', '+919810155555', '+15109926333', '+1415123456']
console.log(findMateches(in1, in2))
//[+14157088956, +15109926333, +17474824380]
