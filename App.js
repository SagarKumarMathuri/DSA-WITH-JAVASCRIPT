// console.log("App.js loaded successfully.");
// console.log("This is a sample application file.");

// process.stdout.write("Application is running...");
// process.stdout.write("No errors detected.");
// process.stdout.write("All systems operational.");

// let prompt = require("prompt-sync")();
// let a = prompt("Enter first number: ");
// process.stdout.write(a);

let prompt = require("prompt-sync")();
let n = prompt("Enter first number: ");
for(let i=0; i<n; i++){
  for(let j=0; j<n; j++){
   process.stdout.write("* ");
  } 
    console.log(" ");
}



