const deepClone = (obj) => {
  if (obj === null || typeof obj !== "object") return obj; // If obj is a primitive value or null, return it directly

  const clone = Array.isArray(obj) ? [] : {}; // Create an empty object or array to hold the cloned properties
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  } else {
    return Object.keys(obj).reduce((acc, key) => {
      acc[key] = deepClone(obj[key]);
      return acc;
    }, {});
  }
};

const original = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4],
  },
};

const cloned = deepClone(original);

console.log(cloned);

console.log(cloned === original);
