console.log('Date Object');
//Returns system date

var systemDate = new Date()

console.log(systemDate);
console.log(systemDate.getFullYear());
console.log(systemDate.getHours());
console.log(systemDate.getDate());
console.log(systemDate.getMonth());
console.log(systemDate.getDay());


// 0-sunday
// 1-moday
// 2-Tuesday
// 3-wednesday
// 4-thursday -----------

//returns date by adding  milliseconds to january 1 1970

//
var dateInMilliseconds = new Date(864000000)
console.log(dateInMilliseconds);


//string constructor
console.log('----------------String Constructor-----------------');
var dateStringConst = new Date('Dec 12 2020');
console.log(dateStringConst);
console.log(dateStringConst.getDay());
console.log(dateStringConst.getFullYear());


// dd/mm/yyyy

var dateval = dateStringConst.getDate();
var monthval = dateStringConst.getMonth();
var yearval = dateStringConst.getFullYear();

var fullDate = `${dateval}/${monthval}/${yearval}`
console.log(fullDate);

console.log('------------------------------------------------------');
//new Date(year, month, day, hours, minutes, seconds, milliseconds) constructor

var dateObj = new Date(2021, 11)
console.log(dateObj);

var dateObj1 = new Date(2021, 10, 21)
console.log(dateObj1);

var dateObj2 = new Date(2021, 0, 21, 12, 56, 56, 878)
console.log(dateObj2);

console.log(dateObj2.getMilliseconds());


console.log('-------------------------------------------------------');

var systemDate1 = new Date()
console.log(systemDate1);

var monVal = systemDate1.getMonth()
var dayValue = systemDate1.getDay()
var yearValue = systemDate1.getFullYear()
var dateValue = systemDate1.getDate()


//Tuesday, December 12, 2012

console.log('<<<<<<<<<<<<<<<<<<class assignments Testing>>>>>>>>>>>>>>>>>>>>>>>');

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agust',
    'September', 'October', 'November', 'December']

var monthData = months[monVal]

var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday']

var dayData = weekdays[dayValue]

var formattedDate = `${dayData}, ${monthData} ${dateValue},${yearValue}`
console.log('Formatted date is ', formattedDate);

console.log("--------------------------------------------------------");

var dateObjVal = new Date();
console.log(dateObjVal);

//dataObjVal.toLocaleDateString(locales,options)
var formattedDate1 = dateObjVal.toLocaleDateString('en-US',
    {
        weekday: 'long',
        month: 'short',
        year: 'numeric',
        day: 'numeric'

    })
    console.log('Date is now '+formattedDate1);