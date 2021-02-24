// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent){
    
    //returns result of base to exponent 
    //2 *2*2*2
    //2*2*2

    //multpily base * base exponent # of times 
  
    //if exponent === 0 return 1
    //else return base * power(base, exponent - 1)
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
            
}

console.log(power(4, 2))