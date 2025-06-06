const name = "Agya"
const repoCount = 50

//console.log(name + repoCount + "value");   //outdated

//console.log(`hellow my name is ${name} and my repo count is ${repoCount}`);  // `` => string interpolation

const gameName = new String('Agya gupta ji hello')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
//console.log(gameName.indexOf('g'));

const newString = gameName.substring(0,2)    // this will not inclued the last index value & here -ve value is not given 
// console.log(newString);

const anotherString = gameName.slice(-3,2)
// console.log(anotherString);

const newStringOne = "     hitesh    "
// console.log(newStringOne)
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
// console.log(url.replace('%20', '-'));
// console.log(url.includes('hitesh'));  // gives output in boolean form true/false

console.log(gameName.split(" "));  // it returns the array 

// plz read all prototype methods of string from js mdn!!







