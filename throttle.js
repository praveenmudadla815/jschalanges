const throttle = (fun, delay) => {
  let isThrottle = false;
  return (...args) => {
    if (!isThrottle) {
      fun(...args);
      isThrottle = true;
      setTimeout(() => {
        isThrottle = false;
      }, delay);
    }
  };
};

const myFunction = () => {
  console.log("praveeen");
};

const throttledFunction = throttle(myFunction, 800);
throttledFunction();
throttledFunction();
throttledFunction();
