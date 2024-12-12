// Control display
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

  // Display choice screen
function displayChoiceScreen() {
  startScreen.style.display = "none";
  scoreDisplay.style.display = "flex";
  choiceScreen.style.display = "block";
  resultScreen.style.display = "none";
}

  // Display result screen
function displayResultScreen() {
  startScreen.style.display = "none";
  scoreDisplay.style.display = "flex";
  choiceScreen.style.display = "none";
  resultScreen.style.display = "block";
}




// On load
displayStartScreen();

const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", startGame);

let gameInProgress = false;
let round = 0;
let computerScore = 0;
let humanScore = 0;

const humanScoreElement = document.querySelector("#user-score");
const computerScoreElement = document.querySelector("#computer-score");

function startGame() {
  gameInProgress = true;
  humanScore = 0;
  computerScore = 0;

  humanScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;
  continueButton.textContent = "Next round";
  displayChoiceScreen();
}




// Choice screen
const choiceButtons = document.querySelector("#choice-buttons-container");
choiceButtons.addEventListener("click", (event) => {
  playRound(event.target.value);
});

function playRound(choice) {
  let currentHumanChoice = choice;
  let currentComputerChoice = getComputerChoice();
  
  humanChoiceElement.textContent = getEmoji(currentHumanChoice);
  computerChoiceElement.textContent = getEmoji(currentComputerChoice);
  
  let currentResult = getResult(currentHumanChoice, currentComputerChoice);

  switch (currentResult) {
    case "draw": 
      resultElement.textContent = "It's a draw";
      break;
    case "win": 
      resultElement.textContent = "You won";
      humanScore++;
      humanScoreElement.textContent = humanScore;
      break;
      default: 
      resultElement.textContent = "You lost";
      computerScore++;
      computerScoreElement.textContent = computerScore;
  }
  
  if (humanScore === 5 || computerScore === 5) endGame();

  displayResultScreen();
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice;

  switch (randomNumber) {
    case 1: 
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    default: 
      computerChoice = "scissors";
  }

  return computerChoice;
}

function getEmoji(choice) {
  let emoji;

  switch (choice) {
    case "rock": 
      emoji = "✊";
      break;
    case "paper": 
      emoji = "🖐️";
      break;
    default: 
      emoji = "✌️";
  }

  return emoji;
}

function getResult(humanChoice, computerChoice) {
  let result;

  if (computerChoice === humanChoice) {
    result = "draw";
  } else if (computerChoice === "rock") {
    if (humanChoice === "paper") {
      result = "win";
    } else {
      result = "lose";
    }
  } else if (computerChoice === "paper") {
    if (humanChoice === "scissors") {
      result = "win";
    } else {
      result = "lose";
    }
  } else {
    if (humanChoice === "rock") {
      result = "win";
    } else {
      result = "lose";
    }
  }

  return result;
}




// Result screen
const humanChoiceElement = document.querySelector("#display-user-choice");
const computerChoiceElement = document.querySelector("#display-computer-choice");
const resultElement = document.querySelector("#display-result");
const continueButton = document.querySelector("#continue-button");

continueButton.addEventListener("click", displayChoiceScreen);

function endGame() {
  resultElement.textContent += ". GAME OVER";
  continueButton.textContent = "New game";
  continueButton.removeEventListener("click", displayChoiceScreen);
  continueButton.addEventListener("click", startGame);
}