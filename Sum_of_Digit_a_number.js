// // Sum of Digits of a Number
// 1287: 1+2+8+7 = 28

function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(sumOfDigits(1287));
