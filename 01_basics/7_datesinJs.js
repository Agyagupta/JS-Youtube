// Date

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toUTCString());

// console.log(typeof myDate);   // object

//let myCreatedDate = new Date( 2025, 0, 23)
// let myCreatedDate = new Date( 2025, 0, 23, 6, 4, 9)    // in js month will start from 0-jan!!
// let myCreatedDate = new Date( "2025-01-13")   // in this format yy-mm-dd here month start from 1  !!
let myCreatedDate = new Date("01-23-2025")     // this is mm-dd-yy format !!
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);  // it gives time in a milisecond from what date you given!! here it is 1749554895869 of 01-23-2025!!
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000); //  for converting in a second, but here it give in decimal form also  !!
// console.log(Math.floor(Date.now()/1000));   // so we use floor or round method to avoid decimal !!


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());  // hare this will count month from 0, to avoid this you can simlpy add +1 then you will get exact month!!
//       //or
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());  // monday, tuesday  count and give output as a 1-7 !!

// `${newDate.getDay()} and the time `


newDate.toLocaleString('default', {
    weekday: "long"
})

console.log(newDate);
