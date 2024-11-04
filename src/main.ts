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
  console.log(youInput, computerInput, computerScore, youScore);
  
});
paper?.addEventListener("click", () => {
  youInput = 1;
  computerInput = Math.floor(Math.random() * 3);
  playGame(youInput, computerInput);
});
scissors?.addEventListener("click", () => {
  youInput = 2;
  computerInput = Math.floor(Math.random() * 3);
  playGame(youInput, computerInput);
});

function playGame(youInput: gameInput, computerInput: gameInput) {
  
  switch (true) {
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
  }
}
