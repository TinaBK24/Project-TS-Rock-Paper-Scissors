import "./style.css";

const five = document.querySelector("#five") as HTMLInputElement;
const ten = document.querySelector("#ten") as HTMLInputElement;
const fifteen = document.querySelector("#fifteen") as HTMLInputElement;
const twenty = document.querySelector("#twenty") as HTMLInputElement;

const rock = document.querySelector("#rock") as HTMLDivElement;
const paper = document.querySelector("#paper") as HTMLDivElement;
const scissors = document.querySelector("#scissors") as HTMLDivElement;

const result = document.querySelector("#result") as HTMLParagraphElement;
const infoDisplay = document.querySelector("#infoDisplay") as HTMLElement;
const youDisplay = document.querySelector(
  "#youDisplay"
) as HTMLParagraphElement;
const ComputerDisplay = document.querySelector(
  "#ComputerDisplay"
) as HTMLParagraphElement;
// ! -------enum----------
enum gameInput {
  rock,
  paper,
  scissors,
}
// ! ---------------------
let youInput: gameInput = 0;
let computerInput: gameInput = 0;
let youScore: number = 0;
let computerScore: number = 0;

rock?.addEventListener("click", () => {
  youInput = 0;
  computerInput = Math.floor(Math.random() * 3);
  playGame(youInput, computerInput);
  youDisplay.textContent = "✊";
  displayComputerInput(computerInput);
});
paper?.addEventListener("click", () => {
  youInput = 1;
  computerInput = Math.floor(Math.random() * 3);
  playGame(youInput, computerInput);
  youDisplay.textContent = "✋";
  displayComputerInput(computerInput);
});
scissors?.addEventListener("click", () => {
  youInput = 2;
  computerInput = Math.floor(Math.random() * 3);
  playGame(youInput, computerInput);
  youDisplay.textContent = "✌️";
  displayComputerInput(computerInput);
});

function playGame(youInput: gameInput, computerInput: gameInput) {
  switch (true) {
    // ------- you -> rock ---------------------------
    case youInput === 0 && computerInput === 0:
      infoDisplay.textContent = `It was a draw! You both chose Rock`;
      break;
    case youInput === 0 && computerInput === 1:
      infoDisplay.textContent = `Paper beats Rock. You lose!`;
      computerScore++;
      result.textContent = `${youScore} : ${computerScore}`;
      break;
    case youInput === 0 && computerInput === 2:
      infoDisplay.textContent = `Rock beats Scissors. You win!`;
      youScore++;
      result.textContent = `${youScore} : ${computerScore}`;
      break;
    // ------- you -> paper ---------------------------
    case youInput === 1 && computerInput === 0:
      infoDisplay.textContent = `Paper beats Rock. You win!`;
      youScore++;
      result.textContent = `${youScore} : ${computerScore}`;
      break;
    case youInput === 1 && computerInput === 1:
      infoDisplay.textContent = `It was a draw! You both chose Paper`;
      break;
    case youInput === 1 && computerInput === 2:
      infoDisplay.textContent = `Scissors beat Paper. You lose!`;
      computerScore++;
      result.textContent = `${youScore} : ${computerScore}`;
      break;
    // --------you -> scissors ---------------------------
    case youInput === 2 && computerInput === 0:
      infoDisplay.textContent = `Rock beats Scissors. You lose!`;
      computerScore++;
      result.textContent = `${youScore} : ${computerScore}`;
      break;
    case youInput === 2 && computerInput === 1:
      infoDisplay.textContent = `Scissors beat Paper. You win!`;
      youScore++;
      result.textContent = `${youScore} : ${computerScore}`;
      break;
    case youInput === 2 && computerInput === 2:
      infoDisplay.textContent = `It was a draw! You both chose Scissors`;
      break;
  }
}

function displayComputerInput(computerInput: gameInput) {
  switch (computerInput) {
    case 0:
      ComputerDisplay.textContent = "✊";
      break;
    case 1:
      ComputerDisplay.textContent = "✋";
      break;
    case 2:
      ComputerDisplay.textContent = "✌️";
      break;
  }
}
