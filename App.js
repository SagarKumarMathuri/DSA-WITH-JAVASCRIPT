// console.log("App.js loaded successfully.");
// console.log("This is a sample application file.");

// process.stdout.write("Application is running...");
// process.stdout.write("No errors detected.");
// process.stdout.write("All systems operational.");

// let prompt = require("prompt-sync")();
// let a = prompt("Enter first number: ");
// process.stdout.write(a);

// let prompt = require("prompt-sync")();
// let n = prompt("Enter first number: ");
// for(let i=0; i<n; i++){
//   for(let j=0; j<i; j++){
//    process.stdout.write(j+" ");
//   }
//     console.log(" "); 
// }

// let prompt = require("prompt-sync")();
// let a = prompt("Enter first number : ")
// for(let j=0; j<n; i++){
//   for(let j=0; j<i; j++){
//     Process.stdout.write(j+ " ")
//   }
//   console.log(" ")
// }


// let prompt = require("prompt-sync")();
// let a = prompt("Enter First number : ")

// let prompt = require("promt-sync")();
// let

// let prompt = require("prompt-sync")();
// let n = prompt("Enter first number: ");
// for(let i=1; i<=n; i++){

//   for(let j=1; j<=n-i+1; j++){
//    process.stdout.write("  ");
//   }
//   for(let j=1; j<=i; j++){
//     process.stdout.write("* ");
//   }
//     console.log();
// }

// let prompt = require("prompt-sync")();
// let n = prompt("Enter first number: ");
// for(let i=0; i<n; i++){
//   let  ascii = 65;
//   for(let j=0; j<i; j++){
//    process.stdout.write(String.fromCharCode(ascii)+" ");
//     ascii++;
//   }
//     console.log(" ");
// }

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter first number: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) {
//       process.stdout.write("* ");
//     } else process.stdout.write("  ");
//   }

//   console.log();
// }

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter first number: "));

// if(n > 0){
//   let fact = 1;
//   for(let i = 1; i <= n; i++){
//      fact *= i;
//   }
//   console.log(fact);
// }

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter first number: "));

// if(n > 0){
//   for(let i = 1; i <= Math.floor(n/2); i++){
//     if (n%i ===0) {
//       console.log(i);
//     }
//   }
// }

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter first number: "));

// if(n > 0){
//    var isPrime = true;
//    for(let i = 2; i <=Math.floor(n/2); i++){
//       if(n % i === 0){
//          isPrime = false;
//          break;
//       }
//    }
//    console.log(isPrime);
   
// }

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter first number: "));
// if(n > 0){
//    console.log(isPrime(n));
// }
// function isPrime(n) {
//    if(n <= 1) return false;
//    if(n==2) return true;
//    for(let i = 3; i <=Math.floor(Math.sqrt(n)); i+=2){
//       if(n % i === 0) return false;
//    }
//    return true;
// }


// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter first number: "));
 

// for(let i = 0 ; i <= 10; i++){
   //    console.log(name);
   // }
   
   // let i = 0;
   // while(i <= 10){
//    console.log(name);
//    i++;
// }
// let i = 0;
// do {
   //    console.log(name);
   //    i++;
   // }
   // while(i <= 10);
   
   // for(let i = 0; i < 10; i++){
      //    if(i === 5){
         //       break;
         //    }
         //    console.log(name);
         //    }
         
         // for(let i = 0; i < 10; i++){
   //    if(i === 5){
      //       continue;
      //    }
      //    console.log(name);
      //    }
      
      
//  let name = `He's often called "sagar mathur"`;
// console.log(name);

// let firstName = "sagar kumar"
// let lastName = " mathur"

// let text = `my full name is ${firstName + lastName}`;
// console.log(text)

// Expression Substitution
// let price = 39;
// let VAT =  0.06;
// let sum = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
// console.log(sum)

// JavaScript String Length

// let text =  "abcdefghijklmnopqrstuvwxyz";
// let sagar = text.length;
// console.log(sagar);

// let name = "sagar mathur"
// let text = name.charAt(5);
// console.log(text);

// let name = "sagar mathur"
// let text = name.charCodeAt(2);
// console.log(text);

// function multiplyMatrices(A, B, n) {
//   let C = Array.from({ length: n }, () => Array(n).fill(0));

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       for (let k = 0; k < n; k++) {
//       C[i][j] += A[i][k] * B[k][j];
//   }
//   }
//   }
//   return C;
// }
// console.log(multiplyMatrices([[1,2,3],[4,5,6],[7,8,9]],[[9,8,7],[6,5,4],[3,2,1]],3));
  
/***----------------------------------------------------------------- */

// #1 (Method 1): Swap Two Numbers in JavaScript! 💡

// let a = 2;
// let b = 4;
// console.log(a,b)
// let temp = a;
// a =b ;
// b = temp;
// console.log(a,b)

// #1 (Method 2): Swapping Without a Third Variable! 💡

// let a = 5;
// let b = 4;
// console.log(a,b)
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a,b)

//#1 (Method 3): Swap Two Numbers in ONE Line! 🚀

// let a = 23;
// let b = 45;
// console.log(a, b)
// [a, b] = [b, a]
// console.log(a,b)


