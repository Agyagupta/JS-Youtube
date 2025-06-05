let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// if given value is in string and we try to convert in number, then it cant be convert but js will show that is convert and give o/p as a NaN!!
// if value is null then its show 0 !!
// if value is undefined then its show NaN!!
// if its a boolean value then its show true-1, and false-0 !!


// "33" => 33 for normal string it convert in a number
// "33abc" => NaN


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean (isLoggedIn)
console.log(booleanIsLoggedIn);
 
//  1 => true; 0 => false;
// for empty string "" => false 
// for any other value "Agya" => true

let someNumber = 45

let stringSomeNumber = String (someNumber)
console.log(stringSomeNumber);
console.log(typeof stringSomeNumber);

