const reverseString = function (str) {
  let reversedString = "";
  for (let i = str.length - 1; i > -1; i--) {
    reversedString += str.charAt(i);
  }
  return reversedString;
};

console.log(reverseString("hi there"));

//Do not edit below this line
module.exports = reverseString;
