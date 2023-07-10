//Get node list of all buttons present
let buttons =
    document.querySelectorAll('button');
//Create a variable for player choice to use in the future
let playerSelection;
//Iterate through all buttons, add event listeners for a click and
//update playerSelection based on a button choice
//Also invoke game function each time button is clicked
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'button1') {
            playerSelection = 'rock';
        } else if (button.id === 'button2') {
            playerSelection = 'paper';
        } else {
            playerSelection = 'scissors';
        }
        game();
    });
});

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

        case 2:
            return "paper";

        case 3:
            return "scissors";
    }
}
//Create a function to play single round between computer and user
//Functions decides who's a winner of current round and updates score
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        switch(computerSelection) {
            case "paper":
                computerPoints++;
                return "You lose! Paper beats Rock";

            case "scissors":
                playerPoints++
                return "You win! Rock beats Scissors";

            default:
                return "Tie";
        }
    } else if (playerSelection === 'paper') {
        switch(computerSelection) {
            case "rock":
                playerPoints++
                return "You win! Paper beats Rock";

            case "scissors":
                computerPoints++;
                return "You lose! Scissors beat Paper"

            default:
                return "Tie";
        }
    } else {
        switch(computerSelection) {
            case "rock":
                computerPoints++;
                return "You lose! Rock beats Scissors"

            case "paper":
                playerPoints++
                return "You win! Scissors beat Paper"

            default:
                return "Tie";
        }
    }
}
//Score tracker
let playerPoints = 0;
let computerPoints = 0;
function game() {
    //Get computer choice
    let computerSelection = getComputerChoice();
    //Get container element
    const container = document.querySelector('#container');
    //Create and style new elements
    const result = document.createElement('div');
    const score = document.createElement('div');
    result.setAttribute('style', 'background-color: #96badc; ' +
        'color: black;');
    score.setAttribute('style', 'background-color: #96badc; ' +
        'color: black');
    //Update new elements with game results
    result.textContent = `${playRound(playerSelection, computerSelection)}`;
    score.textContent = `Player ${playerPoints} Computer ${computerPoints}`;
    //Add new elements to DOM
    container.appendChild(result);
    container.appendChild(score);
    //Conditional for picking a winner
    if (playerPoints === 5 || computerPoints === 5) {
        // Disable all choice buttons while displaying result
        buttons.forEach((button) => {
            button.disabled = true;
        });
        if (playerPoints > computerPoints) {
            score.textContent = `Player scores ${playerPoints} points and 
            wins the game!`;
        } else {
            score.textContent = `Computer scores ${computerPoints} 
            points and wins the game!`;
        }
        //Score reset
        playerPoints = 0;
        computerPoints = 0;
        //Create button for game restart
        const button = document.createElement('button');
        button.textContent = 'Restart';
        //Add event listener to Restart button
        button.addEventListener('click', () => {
            //Clear all elements added to container previously
            container.replaceChildren();
            //Enable choice buttons
            buttons.forEach((button) => {
                button.disabled = false;
            });
        });
        //Add restart button to DOM
        container.appendChild(button);
    }
}