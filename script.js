const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultMessage = document.getElementById("result");
const playAgainBtn = document.getElementById("play-again");
const humanScoreSpanEl = document.getElementById("human-score");
const computerScoreSpanEl = document.getElementById("computer-score");
const roundEl = document.getElementById("round");
const choicesDisplayEl = document.getElementById("choices-display");

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


function getEmoji(choice) {
    const emojis = {
        rock: '🪨',
        paper: '📄',
        scissors: '✂️'
    };
    return emojis[choice];
}

function determineWinner(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }


const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

    if (winConditions[humanChoice] === computerChoice) {
        return 'win';
    } else {
        return 'lose';

    }

}


function updateResultMessage(humanChoice, computerChoice, outcome) {
    resultMessage.classList.remove("win", "lose", "tie");
    choicesDisplayEl.textContent = `You chose ${getEmoji(humanChoice)}. Computer chose ${getEmoji(computerChoice)}.`;

    if(outcome === 'win') {
        resultMessage.textContent = "You win!";
        resultMessage.classList.add("win");
    
    }
    else if(outcome === 'lose') {
        resultMessage.textContent = "You lose!";
        resultMessage.classList.add("lose");
    }
    else {
        resultMessage.textContent = "It's a tie!";
        resultMessage.classList.add("tie");
    }
}

