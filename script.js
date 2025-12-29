const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultDiv = document.getElementById("result");
const playAgainBtn = document.getElementById("play-again");
const humanScoreSpanEl = document.getElementById("human-score");
const computerScoreSpanEl = document.getElementById("computer-score");
const roundEl = document.getElementById("round");

const choiceButton = [rockBtn, paperBtn, scissorsBtn];

let humanScore = 0;
let computerScore = 0;
let round = 1;
const totalRounds = 5;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

