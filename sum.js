// JavaScript function to calculate the sum of two numbers
// 1
const sumofvalues = (num1, num2) => num1 + num2;
const result = sumofvalues(2, 3);
console.log(result);
// 2///////////////////////////////////////////////////////////////

const a = [1, 2, 3.5];

const addarray = a.reduce((acc, currentVlaue) => acc + currentVlaue, 0);

console.log(addarray);

////////////3//////////////

a = [1, 3, 4, 5];
b = [4, 5, 6, 3, 3];
c= [6,6,7,8,9];
find the sum of three arrays

const a = [1, 3, 4, 5];
const b = [4, 5, 6, 3, 3];
const c = [6, 6, 7, 8, 9];

const sum = [...a, ...b, ...c].reduce(
  (acc, currentValue) => acc + currentValue,
  0
);

console.log(sum);

/////////4 /////////
a = [1, 3, [4, 5], 8];
 b = [4, 5, 6, [3, [3, 8]]];
 c = [2, 3, [45, 7], 9, 8, 8]; find the sum of three arrays

const a = [1, 3, [4, 5], 8];
const b = [4, 5, 6, [3, [3, 8]]];
const c = [2, 3, [45, 7], 9, 8, 8];

const sumNestedArrays = (arr) =>
  arr.reduce(
    (acc, curr) => acc + (Array.isArray(curr) ? sumNestedArrays(curr) : curr),
    0
  );

const sum = sumNestedArrays([...a, ...b, ...c]);

console.log(sum); // Output: 132

// flat method also

const falttingSum = (arr) =>
  arr.flat(Infinity).reduce((acc, curr) => acc + curr, 0);

const sumarry = [...a, ...b, ...c];

console.log(falttingSum(sumarry));

// using flat into single array

const a = [1, 3, [4, 5], 8];
const b = [4, 5, 6, [3, [3, 8]]];
const c = [2, 3, [45, 7], 9, 8, 8];
const sum = [...a, ...b, ...c];
const falttingSum = sum.flat(Infinity);

console.log(falttingSum);

a = [2,3,5,6,8,9,4,6,7,9,5,7,9,12,67,88,65]  only even number add //////////////////////////---------------even
const a = [2, 3, 5, 6, 8, 9, 4, 6, 7, 9, 5, 7, 9, 12, 67, 88, 65];
const sumofEvenNumber = a.reduce((acc, num) => {
  if (num % 2 === 0) {
    return acc + num;
  } else {
    return acc;
  }
}, 0);

console.log(sumofEvenNumber);

// above question using ternary operator
const a = [2, 3, 5, 6, 8, 9, 4, 6, 7, 9, 5, 7, 9, 12, 67, 88, 65];
const sumofEvenNumber = a.reduce(
  (acc, num) => (num % 2 === 0 ? acc + num : acc),
  0
);

console.log(sumofEvenNumber);

// with in array is nested array and have some duplicates remove duplicates and add  uniquie values;

const a = [
  2,
  3,
  2,
  4,
  5,
  4,
  5,
  4,
  [8, 6, 5, 7, 5, 6, 8, 8, [4, 7, 8, 5, [6, 7, 9, 5]], [5, 6, 474, 4]],
];

const singlearray = a.flat(Infinity);
console.log(singlearray);

const removeDuplicates = [...new Set(singlearray)];
console.log(removeDuplicates);
// const uniqueArray = [...removeDuplicates];
// console.log(uniqueArray);

const addSum = removeDuplicates.reduce((acc, curr) => acc + curr, 0);
console.log(addSum);

///// OBJECT SUM ///////
const objectA = { a: 1, b: 2, c: 3 };

const sum = Object.values(objectA).reduce((acc, curr) => acc + curr, 0);

console.log(sum);

///////////2 ////////////

const a = { 1: 1, 3: 1, 4: 1, 5: 1 };
const b = { 4: 1, 5: 1, 6: 1, 3: 2 };
const c = { 6: 2, 7: 1, 8: 1, 9: 1 };

const sum = [
  ...Object.values(a),
  ...Object.values(b),
  ...Object.values(c),
].reduce((acc, curr) => acc + curr, 0);

console.log(sum);
/// keys /////
const a = { 1: 1, 3: 1, 4: 1, 5: 1 };
const b = { 4: 1, 5: 1, 6: 1, 3: 2 };
const c = { 6: 2, 7: 1, 8: 1, 9: 1 };

const sum = [
  ...Object.entries(a),
  ...Object.entries(b),
  ...Object.entries(c),
].reduce((acc, curr) => acc + curr[1], 0);

console.log(sum);

const a = { data: [1, 3, [4, 5], 8] };
const b = { data: [4, 5, 6, [3, [3, 8]]] };
const c = { data: [2, 3, [45, 7], 9, 8, 8] };

// Merge nested arrays within objects into a single array
const mergedArray = [...a.data, ...b.data, ...c.data].flat(Infinity);

console.log(mergedArray);
