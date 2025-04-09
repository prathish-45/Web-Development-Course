let listOfDrums = document.querySelectorAll(".drum").length;
for (let i = 0; i < listOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    });
}