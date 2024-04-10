// const debounce = (fun, dely) => {
//   let timeOutId;
//   return (...args) => {
//     clearTimeout(timeOutId);

//     timeOutId = setTimeout(() => fun.apply(this, args), dely);
//   };
// };

// // now we defien function

// const myFunction = () => {
//   console.log("praveen");
// };

// const debounceFunction = debounce(myFunction, 900);

// debounceFunction();
// debounceFunction();
// debounceFunction();

debounce;
const debounce = (fun, dely) => {
  let timeOutId;
  return (...args) => {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => fun.apply(this, args), dely);
  };
};

const myFunction = () => {
  console.log("praveen react");
};

const debounceFunction = debounce(myFunction, 2000);
debounceFunction();
debounceFunction();
debounceFunction();
