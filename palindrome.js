// Original string: "A man a plan a canal Panama"
// After removing non-alphanumeric characters and converting to lowercase: "amanaplanacanalpanama"
// Reverse of the cleaned string: "amanaplanacanalpanama"
// Since the cleaned string is equal to its reverse, the function returns true, indicating that the input is a palindrome.

const isPalindrom = (str) => {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanStr === cleanStr.split("").reverse("").join("");
};

console.log(isPalindrom("A man a plan a canal Panama")); //true

console.log(isPalindrom("praveen")); //false

// let animals = 'mam'

// const splitmethod = (str)=> {
//  const y =   str.split('').reverse('').join('');
//  return animals === y
// }

// console.log(splitmethod(animals))

// -------------with out using extra predefined ________________

const isPalindrome = (str) => {
  str = str.toLowerCase();
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (!isAlphanumeric(str[start])) {
      start++;
      continue;
    }
    if (!isAlphanumeric(str[end])) {
      end--;
      continue;
    }
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

const isAlphanumeric = (char) => {
  const code = char.charCodeAt(0);
  return (code >= 97 && code <= 122) || (code >= 48 && code <= 57);
};

// Test cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
