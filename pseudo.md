# Rock Paper Scissors

## Version 1

- ✅ Setup
  - ✅ Create GitHub repository
  - ✅ Clone repository
  - ✅ `index.html` (blank)
  - ✅ `script.js`
  - ✅ Link `script.js` to `index.html`
- Gameplay
  - ✅ Get computer choice
    - ✅ `getComputerChoice()` (`Math.random()`)
    - ✅ Randomly choose "Rock", "Paper", or "Scissors"
  - ✅ Get user choice
    - ✅ `getHumanChoice()` (`prompt()`)
    - ✅ Validate user input (case-insensitive)
    - ✅ If user input is invalid, `prompt` again
  - ✅ Store computer & user scores
    - ✅ Create score variables (`humanScore`, `computerScore`)
    - ✅ Initialize scores to 0
  - ✅ Play single round
    - ✅ `playRound()`
    - ✅ Get computer & user choices
    - ✅ Determine winner
    - ✅ If draw, re-choose
    - ✅ Declare winner
    - ✅ Update score
  - Play game (5 rounds)
    - ✅ `playGame()`
    - ✅ Confirm game start
    - ✅ Start new round
    - ✅ End game
    - ✅ Declare final winner
- Test
  - ✅ Normal game
    - ✅ User wins
    - ✅ Computer wins
  - ✅ Cancel game
    - ✅ At the start (`confirm()`)
  - ✅ Cancel round
  - ✅ Invalid input

## Version 2

- HTML & CSS
  - Create buttons for user choice
  - Create a `div` for displaying results
- JS
  - Remove playing 5 rounds
  - Add event listeners to buttons
    - `playRound`
    - `playerSelection`
  - Change `console.log` to DOM methods
  - Display the running score
  - End game at 5 points
  - Announce the winner
