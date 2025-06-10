const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));     // 100.00 it gives a fixed value 

const otherNumber = 23.9876

// console.log(otherNumber.toPrecision(3));    //  24.0 it gives a round figure, a precisius value at ... what digit you give

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000 by default it gives result in a us standard, so give arg. as en-IN for indian


// +++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);   // Object
// console.log(Math.abs(-4));  //  4 - it remove -ve, convert -ve no. to +ve
// console.log(Math.round(4.3));  //  4  - it gives round figure of no.
// console.log(Math.ceil(4.2));   // its also same as round but if you want a upper value although you give 4.2 or 4.9 its give 5!!
// console.log(Math.floor(4.9));  // this is also same as above but its give a lower value means 4!!
// console.log(Math.min( 3, 5 , 8, 10));  // its return a minimum value of an array!!
// console.log(Math.max(14, 56, 20, 3));  // this will return a max value of an aaray!!


// console.log(Math.random()); //this will give value from 0-1,  also values mostly in decimal form, this is mostly usable method of math!!
// console.log((Math.random()*10) + 1); //suppose we made a game where value comes only from 0-10 then we use this method an to avoid 
                                        //the result of random which gives only 0-1 we use this type of formula you want No. comes from
                                        //0-10 then mulply by 10 or 16 so * by 16etc and + 1 to avoid coming of '0'
// console.log(Math.floor((Math.random()*10) +1 ));
 
const min = 10  // some time it comes with defined min and max value, so in that case  we should use this formula
const max = 20   // max-min for defining range and +1 to avoid comes 0 and then + min it mean minimum value should be 10!!

console.log(Math.floor(Math.random() * (max - min +1) + min));  // this is a generic formula!!


