const cards = document.querySelectorAll(".card");
const choices = ["Rock", "Paper", "Scissors"];
const results = document.querySelectorAll(".result");
const playerRock = document.querySelector(".rock");
const playerPaper = document.querySelector(".paper");
const playerScissors = document.querySelector(".scissors");
const playerCards = [playerRock,playerPaper,playerScissors];
const playerScoreElement = document.querySelector(".player-score");
const computerScoreElement = document.querySelector(".computer-score");
let playerScore = 0;
let computerScore = 0;
playerScoreElement.textContent = playerScore;
computerScoreElement.textContent = computerScore;

playerCards.forEach(card => {
    card.addEventListener("click", playRound)
})

function playerSelect() {
    let playerChoice =  this.dataset.choice;
    results[0].textContent = `Player played ${playerChoice}.`
    console.log(playerChoice);
    return playerChoice;
}

function computerSelect() {
    let randInt = Math.floor(Math.random() * choices.length);
    let choice = choices[randInt];
    results[1].textContent = `Computer played ${choice}.`
    console.log(choice)
    return choice;
}

function displayResult(player,computer, msg="") {
    results[0].textContent = `Player played ${player}.`
    results[1].textContent = `Computer played ${computer}.`
    results[2].textContent = msg;
}

function playRound() {
    let result = results[2];
    let playerChoice = this.dataset.choice;
    console.log(playerChoice)
    let computerChoice = computerSelect();
    let draw = "Thats a draw!";
    let playerWin = `${playerChoice} beats ${computerChoice}! Player gets 1 point!`;
    let computerWin = `${computerChoice} beats ${playerChoice}! Computer gets 1 point!`;

    if (playerChoice === computerChoice) {
        displayResult(playerChoice,computerChoice,draw);
    } else if (playerChoice === "Rock") {
        if (computerChoice === "Paper") {
            computerScore++
            computerScoreElement.textContent = computerScore;
            displayResult(playerChoice,computerChoice,computerWin);
        }
        else {
            playerScore++
            playerScoreElement.textContent = playerScore;
            displayResult(playerChoice,computerChoice,playerWin);
        }
    } else if (playerChoice === "Paper") {
        if (computerChoice === "Scissors") {
            computerScore++
            computerScoreElement.textContent = computerScore;
            displayResult(playerChoice,computerChoice,computerWin); 
        }
        else {
            playerScore++
            playerScoreElement.textContent = playerScore;
            displayResult(playerChoice,computerChoice,playerWin);
        }
    } else if (playerChoice === "Scissors") {
        if (computerChoice === "Rock") {
            computerScore++
            computerScoreElement.textContent = computerScore;
            displayResult(playerChoice,computerChoice,computerWin);
        }
        else {
            playerScore++
            playerScoreElement.textContent = playerScore;
            displayResult(playerChoice,computerChoice,playerWin);
        } 
    }
}












































