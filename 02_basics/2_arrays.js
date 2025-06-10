const marvel_heros = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel_heros.push(dc)  // this will perform push operation on a existing array!!

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc)  // it will return a new array but this will not use moslty instead of this use spread operator!!
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc]  // spread operator!!
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  // flat- return a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(real_another_array);


console.log(Array.isArray("Agya"));  // this will a array if not then this will return false
console.log(Array.from("Agya"));   // this will convert in to a array
console.log(Array.from({name: "Agya"}));  // this is a intresting case here you will have to provide a proper info. that it converts keys into an array or values into a array otherwise it will return a epmty array!!

let score1 = 100    // multiple value ko convert karna hai then use of instead of from!!
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



