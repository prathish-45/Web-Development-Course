function lifeRemain(age) {
    let years = 90 - age;
    let months = (90 * 12) - (age * 12);
    let weeks = (90 * 52) - (age * 52);
    let days = (90 * 365) - (age * 365);
    console.log("You have " + days + " days " + weeks + " weeks " + months + " months " + years + " years left");
}

lifeRemain(21);