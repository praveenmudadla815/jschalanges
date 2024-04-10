const inputString = "hello world";

const Title = (str) => {
  return str.split(" ").reduce((acc, word) => {
    return (
      acc +
      (acc ? " " : "") +
      word.charAt(0).toUpperCase() +
      word.slice(1).toLowerCase()
    );
  }, "");
};

console.log(Title(inputString));
///output : H E L L O   W O R L D _________all letters capiatal.

// _______when i cahnge space with in the spalit_________ out put : Hello World_________
