// let i = 1;
// while(i <= 10) {
//     console.log(i);
//     i++;
// }

//FizzBuzz using while loop
let i = 1;
output = [];
while(i <= 100) {
    if(i % 3 === 0 && i % 5 === 0) {
        output.push("FizzBuzz");
    } else if(i % 3 === 0) {
        output.push("Fizz");
    } else if(i % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(i);
    }
    i++;
}
console.log(output);