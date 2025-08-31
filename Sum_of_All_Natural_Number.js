/*
Question: sum of all natural number from 1 to n
sum of 1 to 5: 15
*/

function sumOfNaturalNumber(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sumOfNaturalNumber(5));
