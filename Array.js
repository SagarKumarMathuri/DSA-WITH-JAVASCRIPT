// how do you create an empty array?
const arr = [1, 2, 3, 4, 5, "hello", { name: "John" }, [1, 2, 3]];
console.log(arr);
// output: [1, 2, 3, 4, 5, "hello", { name: "John" }, [1, 2, 3]]

// how do you access the first and last element of an array?'
const firstElement = arr[0];
const arrLength = arr.length;
const lastElement = arr[arrLength - 1];
console.log(firstElement, arrLength, lastElement);

// output: 1 8 [1, 2, 3]

// how do you remove the last element of an array?
const lastElement1 = arr.pop();
console.log(arr, lastElement1);
// output: [1, 2, 3, 4, 5, "hello", { name: "John" }] [1, 2, 3]

// how do you add an element to the end of an array?
arr.push(5);
console.log(arr);
// output: [1, 2, 3, 4, 5, "hello", { name: "John" }, 5]

// how do you add an element to the beginning of an array?

arr.unshift(0);
console.log(arr);
// output: [0, 1, 2, 3, 4, 5, "hello", { name: "John" }, 5]

// how do you remove the first element of an array?

arr.shift();
console.log(arr);
// output: [1, 2, 3, 4, 5, "hello", { name: "John" }, 5]

// how do you loop through an array?
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// output: 1 2 3 4 5 "hello" { name: "John" } 5

arr.forEach((element) => {
  console.log(element);
});
// output: 1 2 3 4 5 "hello" { name: "John" } 5

for (const element of arr) {
  console.log(element);
}
// output: 1 2 3 4 5 "hello" { name: "John" } 5

// how do you check if an element exists in an array?
const findElement = (arr, target) => {
  for (let x of arr) {
    if (x === target) {
      return true;
    }
  }
  return false;
};
console.log(findElement(arr, 5)); // true
console.log(findElement(arr, 10)); // false

console.log(arr.includes(5)); // true
