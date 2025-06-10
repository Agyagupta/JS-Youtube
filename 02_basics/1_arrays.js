// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[2]);

// Array methods

// myArr.push(6) // add a new value
// myArr.push(7)
// myArr.pop()  // remove a value from end

// myArr.unshift(9)   // add/insert a value in a 1st place
// myArr.shift()      // remove a value from a 1st place


// console.log(myArr.includes(9)); // gives result in a boolean type
// console.log(myArr.indexOf(2));  // if value exists then this will return a index of that value if not then it will return -1 !!

// const newArr = myArr.join()  // add all the element of array in to a string !!S

// console.log(newArr);
// console.log(myArr);

 

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)   // slice will return a new array from indexing what you given, it will not included last index value and this will not change a original array!!

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)  // this will used for adding and removing array elements, this affact original array

console.log(myn2);
console.log("C", myArr);  







