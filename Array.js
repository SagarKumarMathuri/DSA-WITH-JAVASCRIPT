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

console.log(arr.includes(10)); // false

// 2nd method to check if an element exists in an array
const findElement2 = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};
console.log(findElement2(arr, 5)); // 4
console.log(findElement2(arr, 10)); // -1

console.log(arr.indexOf(5)); // 4
console.log(arr.indexOf(10)); // -1

// how to delete , add or update an element at a specific index in an array?

console.log(arr); // [1, 2, 3, 4, 5, "hello", { name: "John" }, 5]
arr.splice(2, 1); // delete 1 element at index 2
console.log(arr); // [1, 2, 4, 5, "hello", { name: "John" }, 5]
arr.splice(2, 0, 3); // add 3 at index 2
console.log(arr); // [1, 2, 3, 4, 5, "hello", { name: "John" }, 5]
arr.splice(2, 1, "three"); // update element at index 2 to "three"
console.log(arr); // [1, 2, "three", 4, 5, "hello", { name: "John" }, 5]

// splice vs slice
const subarr = arr.slice(1, 4);
console.log(subarr); // [2, "three", 4]

// shallow copy vs deep copy
// shallow copy
const arrB = arr;
arrB.splice(1, 4);
console.log(arrB, arr); // both arrB and arr are changed

// deep copy
const arrC = [...arr];
arrC.splice(1, 4);
console.log(arrC, arr); // only arrC is changed

// how do you concatenate two arrays?
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 4, 5, 6]

// how can you check if two arrays are equals?

const isArrayEquals = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
console.log(isArrayEquals([1, 2, 3], [1, 2, 3])); // true
console.log(isArrayEquals([1, 2, 3], [1, 2, 4])); // false

// 2nd method
const isArrayEquals2 = (arr1, arr2) => {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  );
};
console.log(isArrayEquals2([1, 2, 3], [1, 2, 3])); // true
console.log(isArrayEquals2([1, 2, 3], [1, 2, 4])); // false

// how to sort an array? in ascending and descending order
const arr4 = [5, 3, 8, 1, 4];
arr4.sort((a, b) => a - b);
console.log(arr4); // [1, 3, 4, 5, 8]
arr4.sort((a, b) => b - a);
console.log(arr4); // [8, 5, 4, 3, 1]

arr4.sort(); // sorts as strings
console.log(arr4); // [1, 3, 4, 5, 8] (same as ascending order here)

// how to reverse an array?
arr4.reverse();
console.log(arr4); // [8, 5, 4, 3, 1]
// output: [8, 5, 4, 3, 1]

// map, filter, reduce
const arr5 = [1, 2, 3, 4, 5];
const mappedArr = arr5.map((x) => x * 2);
console.log(mappedArr); // [2, 4, 6, 8, 10]

const filteredArr = arr5.filter((x) => x % 2 === 0);
console.log(filteredArr); // [2, 4]

const sum = arr5.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15 (1+2+3+4+5)

// flatten an array
const arr6 = [1, 2, [3, 4], [5, 6]];
const flattenedArr = arr6.flat();
console.log(flattenedArr); // [1, 2, 3, 4, 5, 6]

// FILTER VS FIND
const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = arr7.filter((x) => x % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10] (all even numbers)
const firstEvenNumber = arr7.find((x) => x % 2 === 0);
console.log(firstEvenNumber); // 2 (first even number)
