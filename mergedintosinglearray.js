const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10];

const mergedShorted = (arr1, arr2) => {
  let merged = [];
  while (arr1.length && arr2.length) {
    const smaller = arr1[0] < arr2[0] ? arr1.shift() : arr2.shift();
    merged.push(smaller);
  }
  merged.push(...arr1, ...arr2);
  return merged;
};
console.log(mergedShorted(arr1, arr2));
