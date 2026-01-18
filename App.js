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