// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);    automatically js will convert string into number wrong way, always campare values withnsame datatype!!
// console.log("02" > 1);

// console.log(null > 0);   // false
// console.log(null == 0);   // false
// console.log(null >= 0);   // true

/* the reason is that an equality check == and comparisons > < >= <= work differentily.
   comparisons covert null to a number,  treating it as 0. thats why null >= 0 is true 
   avoid to write null and undefined its create confusion write only clean code!! */

// console.log(undefined > 0);   // false
// console.log( undefined == 0);  // false
// console.log( undefined >= 0);  // false

// ===

console.log("2" === 2);  //=== its check datatype also








