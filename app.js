const choices = ["rock", "paper", "scissors"];

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
            return computerWin;
        }
        else {
            return playerWin;
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            return computerWin; 
        }
        else {
            return playerWin;
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            return computerWin;
        }
        else {
            return playerWin;
        } 
    }
}

function testRound() {
    let cpu = computerSelect();
    let player = computerSelect();
    return playRound(player, cpu);
}

for (let i = 0; i < 20; i++) {
    console.log(testRound())
}
