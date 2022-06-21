const cards = document.querySelectorAll(".card");
const choices = ["Rock", "Paper", "Scissors"];
const results = document.querySelectorAll(".result");
const playerRock = document.querySelector(".rock");
const playerPaper = document.querySelector(".paper");
const playerScissors = document.querySelector(".scissors");
const playerCards = [playerRock,playerPaper,playerScissors];
const playerScoreElement = document.querySelector(".player-score");
const computerScoreElement = document.querySelector(".computer-score");
const playAgain = document.querySelector(".play-again");
let playerScore = 0;
let computerScore = 0;
playerScoreElement.textContent = playerScore;
computerScoreElement.textContent = computerScore;

playerCards.forEach(card => {
    card.addEventListener("click", playRound)
})

playAgain.addEventListener("click", () => {
    window.location.reload()
})

function computerSelect() {
    let randInt = Math.floor(Math.random() * choices.length);
    let choice = choices[randInt];
    results[1].textContent = `Computer played ${choice}.`
    return choice;
}

function displayResult(player,computer, msg="") {
    results[0].textContent = `Player played ${player}.`
    results[1].textContent = `Computer played ${computer}.`
    results[2].textContent = msg;
}

function playRound() {
    let playerChoice = this.dataset.choice;
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
    if (playerScore === 5) {
        results[2].textContent = `Game Over! Player wins! `
        playerCards.forEach(card => {
            card.removeEventListener("click", playRound);
        })
        playAgain.setAttribute("style", "display: block;");
    } else if (computerScore === 5) {
        results[2].textContent = `Game Over! Computer wins!`
        playerCards.forEach(card => {
            card.removeEventListener("click", playRound);
        })
        playAgain.setAttribute("style", "display: block;");
    }
}












































