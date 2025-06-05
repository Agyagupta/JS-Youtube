let score = "33abc"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// if given value is in string and we try to convert in number, then it cant be convert but js will show that is convert and give o/p as a NaN!!
// if value is null then its show 0 !!
// if value is undefined then its show NaN!!
// if its a boolean value then its show true-1, and false-0 !!


// "33" => 33 for normal string it convert in a number
// "33abc" => NaN


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean (isLoggedIn)
//console.log(booleanIsLoggedIn);
 
//  1 => true; 0 => false;
// for empty string "" => false 
// for any other value "Agya" => true

let someNumber = 45

let stringSomeNumber = String (someNumber)
// console.log(stringSomeNumber);
// console.log(typeof stringSomeNumber);



// **********************************  Operations  *********************************

let value = 3

let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*3);
// console.log(2**4);   
// console.log(4/2);
// console.log(10%2);    

let str1 = "hello"
let str2 = " Agya"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);    // 122
// console.log(1 + 2 + "2");    // 32


// console.log(+true);  //o/p-1
// console.log(true+);  // unexpected tokan
// console.log(+"");    //0

let num1, num2, num3

num1 = num2 = num3 = 2+2

let gameCounter = 100

gameCounter++;
console.log(gameCounter);

++gameCounter;
console.log(gameCounter);








