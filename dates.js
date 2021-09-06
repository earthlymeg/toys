function date(dateStr) {

    if (dateStr[8] === 'A') {
        if (dateStr.substring(0, 2) === '12') {
            let newHr = '00';
            return newHr + dateStr.substring(2, 8);
        } else {
            return dateStr.substring(0, 8)
        }

    }

    if (dateStr[8] === 'P') {

        if (dateStr.substring(0, 2) === '12') {
            return dateStr.substring(0, 8)
        } else {
            let hour = Number(dateStr.substring(0, 2)) + 12;
            let newDate = hour + dateStr.substring(2, 8);

            return newDate
        }
    }

}


let t1 = '12:33:00AM' //'00:33:00'
let t2 = '12:33:00PM' //'12:33:00'
let t3 = '07:05:45AM' // '7:05:45'

console.log(date(t1))
console.log(date(t2))
console.log(date(t3))