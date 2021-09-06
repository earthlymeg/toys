


function segments(message) {
    if (message.length <= 160) {
        return message;
    }
    let outputStr = '';
    //round up to determine how many segments will be made from length of message

    let segments = Math.round(message.length / 155);

    //split up string into an array delimmited by spaces
    let arrOfStrings = message.split(' ');

    let arraysegments = Math.round(arrOfStrings.length / segments)
    let start = 0;
    let end = arraysegments;
    let i =0;
    while (end <= arrOfStrings.length) {
        let tempArrString = arrOfStrings.slice(start, end);
        let tempStr = tempArrString.join(' ');
        //append substring to output
        outputStr += tempStr
        //append "fraction" of segment to output string
        let fraction = `(${i + 1}/${segments})`
        //increment start and endpoints for next substring
        outputStr += fraction + '\n';
        start += arraysegments;
        end += arraysegments;
        i++;
    }
    // console.log(arrOfStrings.length, arraysegments)

    return outputStr;

}






let in1 = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus'

console.log(segments(in1))