const cards = document.querySelectorAll(".card");
const choices = ["rock", "paper", "scissors"];
const results = document.querySelector(".results");

function displayResult(text) {
    let p = document.createElement("p");
    p.textContent = text;
    results.appendChild(p)
}

function computerSelect() {
    let randInt = Math.floor(Math.random() * choices.length);
    let choice = choices[randInt];
    displayResult(`Computer played ${choice}!`);
    return choice;
}

let playerChoice = function playerSelect() {
    let choice = this.dataset.choice;
    displayResult(`Player played ${choice}!`);
    return choice
}

let round = function playRound(playerChoice) {
    let computerChoice = computerSelect();
    let playerWin = `Player wins! ${playerChoice} beats ${computerChoice}!`;
    let computerWin = `Computer wins! ${computerChoice} beats ${playerChoice}!`;
    

    if (playerChoice === computerChoice) {
        return "That is a DRAW!"
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++
            console.log(computerWin);
        }
        else {
            playerScore++
            return playerWin;
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore++
            return computerWin; 
        }
        else {
            playerScore++
            return playerWin;
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++
            return computerWin;
        }
        else {
            playerScore++
            return playerWin;
        } 
    }
}

