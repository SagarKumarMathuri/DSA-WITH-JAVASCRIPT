// 1. Reverse a string

function reverseString(str) {
  let reversed = "sagar";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString);
