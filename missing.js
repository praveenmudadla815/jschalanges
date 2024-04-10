const a = [
  1,
  5,
  8,
  6,
  7,
  8,
  8,
  9,
  9,
  5,
  8,
  8,
  [4, 8, 8, [8, 3, 5, 7, 7, [7, 7, 8, 9, 9]]],
];

const flatterned = a.flat(Infinity);

const remove = [...new Set(flatterned)];
const missing = Array.from(
  { length: remove[remove.length - 1] - remove[0] + 1 },
  (_, i) => i + remove[0]
).filter((num) => !remove.includes(num));

console.log(missing);

// const a = [1, 5, 6, 7, 8];
// const missing = Array.from({ length: a[a.length - 1] - a[0] + 1 }, (_, i) => i + a[0]).filter(num => !a.includes(num));

// console.log("Missing values:", missing);
// Missing values: [2, 3, 4]
