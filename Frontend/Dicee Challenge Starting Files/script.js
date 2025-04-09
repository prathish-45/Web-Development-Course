let player1 = Math.floor((Math.random() * 6) + 1);
let player2 = Math.floor((Math.random() * 6) + 1);

if (player1 > player2) {
    document.querySelector("h1").textContent = "🏆Player 1 Wins";
}else if (player1 < player2) {
    document.querySelector("h1").textContent = "Player 2 Wins🏆";
}else {
    document.querySelector("h1").textContent = "Draw!";
}


document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice" + player1 + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice" + player2 + ".png");