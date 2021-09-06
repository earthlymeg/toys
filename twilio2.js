


function segments(message) {
    if (message.length <= 160) {
        return message;
    }
    //round up to determine how many segments will be made from length of message
    let segments = Math.round(message.length / 155);

    //   let outputStr = '';
    //   let start = 0;
    //   //each prefix is length 5, so let's account for that when we slice up the string
    //   let end = 155;
    //   //iterate for quantity of segments
    //   for (let i = 0; i < segments; i++) {

    //      //append substring to output
    //       outputStr += message.substring(start, end);
    //       //append "fraction" of segment to output string
    //       let fraction = `(${i + 1}/${segments})`
    //       //increment start and endpoints for next substring
    //       outputStr += fraction + '\n';
    //       start += 155;
    //       end += 155;

    //}


    //split up string into an array delimmited by spaces
    let arrOfStrings = message.split(' ');

    //let start = 0;
    //let end = 155;

    let outputStr = ''

    let tempStr = '';
    let i = 0;

    while (tempStr.length <= 155) {
        tempStr += arrOfStrings[i];
        i++;
    }


    // console.log(outputStr)
    return outputStr;

}






let in1 = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus'

console.log(segments(in1))