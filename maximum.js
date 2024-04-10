// ----------------------Write a JavaScript program to find the maximum number in an array. -------------------

const numbers = [10, 5, 20, 8, 15];

const findMax = (arr) => {
  return arr.length === 0
    ? "empty"
    : arr.reduce((max, curr) => (max > curr ? max : curr));
};
console.log(findMax(numbers));
// --------------------------------second question -----------find the maximum value with in three arrays -------------------
const a = [10, 5, 20, 8, 15];
const b = [7, 9, 56, 89, 67, 8];
const c = [69, 8, 9, 8, 9];
const singleArray = [...a, ...b, ...c];

const findMax = (arr) => {
  return arr.length === 0
    ? "empty"
    : arr.reduce((max, curr) => (max > curr ? max : curr));
};
console.log(findMax(singleArray));
console.log(singleArray);

// ------------------------3rd question-----To remove duplicates from the array and then find the word with the maximum length-------------------------------

const a = [
  "praveen",
  "kumar",
  "apple",
  "yellow",
  "praveen",
  "hari",
  "hari",
  "anilkumars",
];

const removeDuplicates = [...new Set(a)];
console.log(removeDuplicates);

const findMax = (arr) => {
  return arr.length === 0
    ? "empty"
    : arr.reduce((max, curr) => (max.length > curr.length ? max : curr));
};
console.log(findMax(removeDuplicates));

// ---------------fourth question -----------------------
const x = [1, 2, 3];
x[-1] = -1;
console.log(x.length);
ans = 3;

// ------------------------- 4th question _________________

const str = "121321323456666";
let result = str.split("");

const removeDuplicates = [...new Set(result)].join("");

console.log("'" + removeDuplicates + "'");
