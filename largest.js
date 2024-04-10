// _____________largest elemnt in the array__________

const nestedArray = [1, 2, [3, 4, [5, 6]], 7, 8, [9, 10]];

const flat = (a) => a.flat(Infinity);
console.log(flat(nestedArray));

const findLarge = (arr) => {
  return arr.length === 0
    ? "empty"
    : arr.reduce((large, curr) => (large > curr ? large : curr));
};
console.log(findLarge(flat(nestedArray)));

// ________________samllest elemnt _____________

const nestedArray = [1, 2, [3, 4, [5, 6]], 7, 8, [9, 10]];

const flat = (a) => a.flat(Infinity);
// console.log(flat(nestedArray));

const findSmallest = (arr) => {
  return arr.length === 0
    ? "empty"
    : arr.reduce((small, curr) => (curr < small ? curr : small));
};
console.log(findSmallest(flat(nestedArray)));

// you want to find both the smallest and largest elements within the nested array using a single function
const nestedArray = [1, 2, [3, 4, [5, 6]], 7, 8, [9, 10]];

const flat = (a) => a.flat(Infinity);

const findMax = (arr) => {
  const flattrenarr = flat(arr);
  if (flattrenarr === 0) {
    return { smallest: "empty", largest: "empty" };
  }
  const largest = flattrenarr.reduce((max, curr) => (max > curr ? max : curr));
  const smallest = flattrenarr.reduce((min, curr) => (curr < min ? curr : min));
  return { largest, smallest };
};

console.log(findMax(nestedArray));
