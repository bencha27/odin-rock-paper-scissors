// Gameplay

  // Variables
let computerScore = 0;
let humanScore = 0;

  // Get computer choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice;

  switch (randomNumber) {
    case 1: 
      computerChoice = "Rock";
      break;
    case 2:
      computerChoice = "Paper";
      break;
    default: 
      computerChoice = "Scissors";
  }

  return computerChoice;
}

  // Get user choice
function getHumanChoice() {
  let humanChoice = prompt("Choose rock, paper, or scissors.");

  if (humanChoice === null) {
    if (confirm("Do you want to keep playing?")) {
      humanChoice = getHumanChoice();
    } else {
      console.log("GAME OVER");
      console.log("Refresh the page to start a new game.");
    }
  }

  switch (humanChoice.trim().toLowerCase()) {
    case "rock":
      humanChoice = "Rock";
      break;
    case "paper":
      humanChoice = "Paper";
      break;
    case "scissors":
      humanChoice = "Scissors";
    default:
      alert("Invalid choice. Please try again.");
      humanChoice = getHumanChoice();
  }

  return humanChoice;
}

  // Play a single round
function playRound() {
  let currentHumanChoice = getHumanChoice();
  console.log(`You chose ${currentHumanChoice}.`);

  let currentComputerChoice = getComputerChoice();
  console.log(`The computer chose ${currentComputerChoice}.`);
  
  let currentResult = getResult(currentHumanChoice, currentComputerChoice);

  displayResult(currentResult);
  displayScore();
}

function getResult(myChoice, opponentChoice) {
  let result;

  if (opponentChoice === myChoice) {
    result = "draw";
  } else if (opponentChoice === "Rock") {
    if (myChoice === "Paper") {
      result = "win";
    } else {
      result = "lose";
    }
  } else if (opponentChoice === "Paper") {
    if (myChoice === "Scissors") {
      result = "win";
    } else {
      result = "lose";
    }
  } else {
    if (myChoice === "Rock") {
      result = "win";
    } else {
      result = "lose";
    }
  }

  return result;
}

function displayResult(result) {
  switch (result) {
    case "win":
      console.log("You won!");
      humanScore++;
      break;
    case "lose":
      console.log("You lost.");
      computerScore++;
      break;
    default:
      console.log("It's a draw.");
  }
}

function displayScore() {
  console.log(`Current score
  You: ${humanScore}, Computer: ${computerScore}`);
}

  // Play a game
function playGame() {
  if (confirm("Play Rock, Paper, Scissors?")) {
    console.log("ROUND 1");
    playRound();

    for (let round = 2; round <= 5; round++) {
      if (confirm("Play next round?")) {
        console.log(`ROUND ${round}`);
        playRound();
      } else {
        console.log("GAME OVER");
        break;
      }
    }
  }

  console.log("Refresh the page to start a new game.");
}

playGame();