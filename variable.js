let a = 10;
let b = 20;
console.log("Before swap: " + a + " " + b);

// Swaping elements:
let temp = a;
a = b;
b = temp;
console.log("After swap: " + a + " " + b);

//Length
let stringLength = "Prathish is learning Javascript";
console.log(stringLength.length);

//Twitter counter
let maxLength = 280;
let twitterPrompt = readLine("Enter your twit");
let remainingChar = maxLength - twitterPrompt.length;
console.log("You have writtern " + twitterPrompt + " characters, you have " + remainingChar + "characters left");


