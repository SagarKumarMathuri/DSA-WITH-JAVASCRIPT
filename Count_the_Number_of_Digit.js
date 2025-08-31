// Count the Number of Digits in a Number
// 34252: 5

function countDigits(num) {
  num = Math.abs(num); // Handle negative numbers
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}
console.log(countDigits(34252)); // Output: 5
console.log(countDigits(-12345)); // Output: 5
