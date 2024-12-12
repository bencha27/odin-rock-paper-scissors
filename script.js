// Gameplay

  // Variables
let gameInProgress = false;
let round = 0;
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
  let humanChoice = prompt(`ROUND ${round}

Choose rock, paper, or scissors.`);

  if (humanChoice === null) {
    return gameInProgress = false;
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
  let currentComputerChoice = getComputerChoice();

  if (!currentHumanChoice) {
    return;
  }
  console.log(`You chose ${currentHumanChoice}. The computer chose ${currentComputerChoice}.`);
  
  let currentResult = getResult(currentHumanChoice, currentComputerChoice);
  
  if (currentResult === "draw") {
    console.log("It's a draw. Go again.");
    alert("It's a draw. Go again.");
    playRound();
  } else {
    displayResult(currentResult);
    displayScore();
  }
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
  console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}

  // Play a game
function playGame() {
  if (confirm("Let's play Rock, Paper, Scissors!")) {
    gameInProgress = true;
  }
  
  while (gameInProgress && round < 5) {
    round++;
    console.log(`
ROUND ${round}`);
    playRound();
  }

  if (!gameInProgress) {
    console.log("GAME OVER");
    return console.log(`Refresh the page to start a new game.`);
  }

  if (humanScore > computerScore) {
    console.log(`
YOU WIN!`);
  } else if (humanScore < computerScore) {
    console.log(`
THE COMPUTER WINS.`);
  }
  console.log(`Refresh the page to start a new game.`);
}

// playGame();


const startScreen = document.querySelector("#start-screen");
const scoreDisplay = document.querySelector("#display-score-container");
const choiceScreen = document.querySelector("#user-choice-container");
const resultScreen = document.querySelector("#display-result-container");

// Display start screen
function displayStartScreen() {
  startScreen.style.display = "flex";
  scoreDisplay.style.display = "none";
  choiceScreen.style.display = "none";
  resultScreen.style.display = "none";
}

// Display game screen - choice
function displayChoiceScreen() {
  startScreen.style.display = "none";
  scoreDisplay.style.display = "flex";
  choiceScreen.style.display = "block";
  resultScreen.style.display = "none";
}

// Display game screen - result
function displayResultScreen() {
  startScreen.style.display = "none";
  scoreDisplay.style.display = "flex";
  choiceScreen.style.display = "none";
  resultScreen.style.display = "block";
}

displayStartScreen();