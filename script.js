//Make computer choose from selected values
 // Create a function
 // Make it choose a random number between 1 and 3
 // With switch conditional, link the number to either Rock, Paper or Scissors
 // Return the value
function getComputerChoice() {
    let computerChoice = Math.round(Math.random() * 3);

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
//Make the user choose from selected values
//Create a function to play single round between computer and user
