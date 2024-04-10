function findPairs(arr, target) {
  return arr.flatMap((num, index) =>
    arr
      .slice(index + 1)
      .filter((otherNum) => num + otherNum === target)
      .map((otherNum) => [num, otherNum])
  );
}

let testArr = [10, 20, 30, 40, 50, 60];
console.log(findPairs(testArr, 40)); // Output: [[10, 30]]
console.log(findPairs(testArr, 50));
