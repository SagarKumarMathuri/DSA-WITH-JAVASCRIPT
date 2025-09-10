// string in javascript

//console.log(str); // output: Hello, World!

// how do you get the length of a string?
//console.log(str.length); // output: 13
// console.log(str.slice(-1)); // output: Hello
// console.log(str.substring(3, 6));
// console.log(str.replace("World", "JavaScript")); // output: Hello, JavaScript!
// console.log(str.replaceAll("Hello", "Hi")); // output: Hi Hi, World!

// concatenate two strings
// let str1 = "Hello";
// let str2 = " World";
// console.log(str2.concat("" + str1));

// trim a string
// let str3 = "   Hello, World!   ";
// console.log(str3.trim().length); // output: Hello, World!

// charAt()
// let str = "Hello, World!";
// console.log(str.charAt(4)); // output: H
// console.log(str[5]); // output: H

let str3 = "Apple, Banana, Kiwi";
//console.log(str3.split(", ")); // output: ['Apple', 'Banana', 'Kiwi']
//console.log(str3.split("")); // output: ['A', 'p', 'p', 'l', 'e', ',', ' ', 'B', 'a', 'n', 'a', 'n', 'a', ',', ' ', 'K', 'i', 'w', 'i']
//console.log(str3.split(" ", 2)); // output: ['Apple,', 'Banana,']
//console.log(str3.split(" ", 1)); // output: ['Apple,']
let arr = str3.split(", ");
console.log(arr.join(",", 1)); // output: ['Apple,']

// how do you check if a string contains a substring?
