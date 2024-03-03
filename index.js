// EXAMPLE 1 - Convert all Array Elements to Uppercase or Lowercase in JS

// ✅ convert all array elements to uppercase
const arr = ['apple', 'banana', 'cereal'];

const upper = arr.map(element => {
  return element.toUpperCase();
});

// 👇️ ['APPLE', 'BANANA', 'CEREAL']
console.log(upper);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Converting all array elements to lowercase

// // ✅ convert all array elements to lowercase
// const arr = ['BOBBY', 'HADZ', 'COM'];

// const lower = arr.map(element => {
//   return element.toLowerCase();
// });

// console.log(lower); // 👉️ [ 'bobby', 'hadz', 'com' ]

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert all Array Elements to Uppercase or Lowercase using `Array.forEach()`

// // ✅ convert all array elements to Uppercase
// const arr = ['apple', 'banana', 'cereal'];

// const upper = [];

// arr.forEach(element => {
//   upper.push(element.toUpperCase());
// });

// // 👇️ ['APPLE', 'BANANA', 'CEREAL']
// console.log(upper);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Convert all Array Elements to Uppercase or Lowercase using a `for...of` loop

// // ✅ convert all array elements to Uppercase
// const arr = ['apple', 'banana', 'cereal'];

// const upper = [];

// for (const element of arr) {
//   upper.push(element.toUpperCase());
// }

// console.log(upper); // 👉️ [ 'APPLE', 'BANANA', 'CEREAL' ]

// ------------------------------------------------------------------

// // EXAMPLE 5 - Convert all Array Elements to uppercase using a `for` loop

// // ✅ convert all array elements to Uppercase
// const arr = ['apple', 'banana', 'cereal'];

// const upper = [];

// for (let index = 0; index < arr.length; index++) {
//   upper.push(arr[index].toUpperCase());
// }

// console.log(upper); // 👉️ [ 'APPLE', 'BANANA', 'CEREAL' ]

// ------------------------------------------------------------------

// // EXAMPLE 6 - With a reusable function

// function upperArray(array) {
//   return array.map(element => {
//     return element.toUpperCase();
//   });
// }

// const arr = ['apple', 'banana', 'cereal'];

// const upper = upperArray(arr);
// console.log(upper); // 👉️ [ 'APPLE', 'BANANA', 'CEREAL' ]
