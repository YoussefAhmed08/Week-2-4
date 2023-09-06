"use strict";

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
let displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    if (score > 1) {
      dispatchEvent("⛔ No Number!");
    } else {
      displayMessage("😢 You Lost The Game");
      displayScore(0);
    }
  }
  if (guess !== secretNum) {
    if (score > 1) {
      if (guess === secretNum + 1 || guess === secretNum - 1) {
        displayMessage("😬 So Close!");
        score--;
        displayScore(score);
      } else if (guess > secretNum || guess < secretNum) {
        displayMessage(guess > secretNum ? "↗ Too High!" : "↘ Too Low!");
        score--;
        displayScore(score);
      }
    }
  } else if (guess === secretNum) {
    displayMessage("🎉 Correct Number");
    document.querySelector("body").style.background = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNum;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    } else {
      displayMessage("😢 You Lost The Game");
      displayScore(score);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  displayScore(score);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style = "15rem";
  document.querySelector("body").style.background = "#222";
  document.querySelector(".guess").value = "";
});
