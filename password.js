var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Welcome to password validator. Please enter your password: ",

    function CheckPassword(inputtxt) 
