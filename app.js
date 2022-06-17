function computerSelect() {
    let randInt = Math.floor(Math.random() * choices.length);
    return choices[randInt];
}

function playerSelect() {
    let choice = prompt("Choose 'rock', 'paper', or 'scissors': ").toLowerCase();
    return choice
}

function playRound(playerChoice, computerChoice) {
    let playerWin = `Player wins! ${playerChoice} beats ${computerChoice}!`;
    let computerWin = `Computer wins! ${computerChoice} beats ${playerChoice}!`;

    if (playerChoice === computerChoice) {
        return "That is a DRAW!"
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++
            return computerWin;
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

function testRound() {
    let player = computerSelect();
    let cpu = computerSelect();
    return playRound(player, cpu);
}

function game() {
    let cpu = computerSelect();
    let player = playerSelect();
    let result = playRound(player,cpu);
    console.log(result);
    displayScores();
}

function displayScores() {
    console.log(`Player Score: ${playerScore}\nComputer Score: ${computerScore}`);
}

function displayWinner() {
    if (playerScore === 3) {
        alert("Player has won!");
    } else if (computerScore === 3) 
    {
        alert("Computer has won!");
    }
}


const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// GAME LOGIC

while (playerScore < 3 && computerScore < 3) {
    game();
    displayWinner();
} 
