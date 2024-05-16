"use strict";

let randNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
const message = (message) => {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const check = Number(document.querySelector(".guess").value);
  if (!check) {
    message("Enter number");
  } else if (check === randNumber) {
    message("correct number");
    document.querySelector(".number").textContent = check;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else if (check !== randNumber) {
    if (score !== 0) {
      message(
        check > randNumber ? "Enter number is high" : "Enter number is low"
      );
      score--;
      document.querySelector(".score").textContent = score;
      if (score === 0) {
        message("You loss the game, Play again!");
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randNumber = Math.trunc(Math.random() * 20) + 1;
  message("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
