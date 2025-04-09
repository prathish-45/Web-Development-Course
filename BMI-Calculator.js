//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight, height){
    let BMI = weight/(height*height);
    let round = Math.round(BMI);
    return round;
}

let bmi = bmiCalculator(70, 1.8);
console.log(bmi);

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:



bmi should equal 20 when it's rounded to the nearest whole number.

*/
