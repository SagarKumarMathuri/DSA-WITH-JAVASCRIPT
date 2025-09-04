// how do you create an empty array?
const arr = [1, 2, 3, 4, 5, "hello", { name: "John" }, [1, 2, 3]];
console.log(arr);
// output: [1, 2, 3, 4, 5, "hello", { name: "John" }, [1, 2, 3]]

// how do you access the first and last element of an array?'
const firstElement = arr[0];
const arrLength = arr.length;
const lastElement = arr[arrLength - 1];
console.log(firstElement, arrLength, lastElement);
