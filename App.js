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

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter first number: "));

if(n > 0){
  let fact = 1;
  for(let i = 1; i <= n; i++){
     fact *= i;
  }
  console.log(fact);
}