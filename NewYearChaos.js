function minimumBribes(q) {
    
    //input = unsorted array

    //output = number of bribes OR 'too chaotic' if n > 2 

    //create a storage obj
    let storage = {};
    //create count var
    let count = 0;
    
    //iterate over arr
      //subtract current element from index + 1
      //store current element in storage = above amount

    for (let i = 0; i < q.length; i++) {
        let current = q[i];
        storage[current] = current - (i + 1);
    }   
    
    //no ONE person can bribe more than 2x
    
    //iterate over obj values 
      //add each POSTIVE value to count
      //if any value is > 2 
      //print 'too chaotic' and return
    
    for (let j = 0; j < Object.values(storage).length; j++) {
      let current = Object.values(storage)[j];
    //   console.log(j)
      if (current > 0) {
        count += current;
      } if (current > 2) {
          console.log('too chaotic');
          return;
      }       
    }

    console.log(count);



}

minimumBribes([1,2,5,3,7,8,6,4]);

//expect
// {
//   2: 1,
//   1: -1,
//   5: 2,
//   3: -1,
//   4: -1      
// }