//Make computer choose from selected values
//Create a function
function getComputerChoice() {
    //Make it choose a random number between 1 and 3
    let computerChoice = Math.round(Math.random() * 3);
    //With switch conditional, link the number to either Rock, Paper or Scissors
    //Return the value
    switch(computerChoice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}
//Create a function to play single round between computer and user
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        switch(computerSelection) {
            case "paper":
                computerScore++;
                return "You lose! Paper beats Rock";
                break;
            case "scissors":
                playerScore++;
                return "You win! Rock beats Scissors";
                break;

            default:
                return "Tie";
        }
    } else if (playerSelection === "paper") {
        switch(computerSelection) {
            case "rock":
                playerScore++;
                return "You win! Paper beats Rock";
                break;
            case "scissors":
                computerScore++;
                return "You lose! Scissors beat Paper"
                break;

            default:
                return "Tie";
        }
    } else {
        switch(computerSelection) {
            case "rock":
                computerScore++;
                return "You lose! Rock beats Scissors"
                break;
            case "paper":
                playerScore++;
                return "You win! Scissors beat Paper"
                break;

            default:
                return "Tie";
        }
    }
}
//Declare variables for player and computer score
let playerScore = 0;
let computerScore = 0;
//Loop over the game five times
function game() {
    for (let i = 1; i <= 5; i++) {
        //Make the user choose from the selected values
        let playerInput = prompt("Please pick Rock, Paper, or Scissors: ");
        //Convert to lowerCase for insensitivity
        let playerSelection = playerInput.toLowerCase();
        //Get computer choice
        let computerSelection = getComputerChoice();
        //Invoke playRound function and get results
        console.log(playRound(playerSelection, computerSelection));
    }
    //Determine who is the winner
    if (playerScore > computerScore) {
        console.log(`You won!\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You lost!\nComputer: ${computerScore}\nPlayer: ${playerScore}`);
    } else {
        console.log("Tied!");
    }
}
//Initialize game
game();