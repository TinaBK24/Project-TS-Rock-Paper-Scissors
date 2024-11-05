import "./style.css";

// Hinzufügen eines Event-Handlers für die Radio-Buttons
const radioBtn = document.querySelectorAll("input[type='radio']");

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
const radioBtnDiv = document.querySelector(".radio-btn") as HTMLDivElement;
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

// Hinzufügen einer Variablen zur Speicherung der ausgewählten Anzahl an Runden
let totalRounds: number = 5;
let roundsPlayed: number = 0;
let isGameOver: boolean = false; // Das Spiel ist beendet nicht
let roundCounter: number = 0; //für displayRounds() function

radioBtn.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    totalRounds = parseInt((event.target as HTMLInputElement).value);
    youScore = 0; // Zurücksetzen des Punktestands bei Auswahl einer neuen Rundenanzahl
    computerScore = 0;
    result.textContent = "0 : 0"; // Ergebnis auf dem Bildschirm zurücksetzen
    youDisplay.textContent = "You";
    ComputerDisplay.textContent = "Comp";
    infoDisplay.textContent = "Let's play"; // Nachricht zurücksetzen
    roundsPlayed = 0;
    isGameOver = false; // Zurücksetzen der gespielten Runden
  });
});

rock?.addEventListener("click", () => {
  if (isGameOver) return; // Nicht spielen, wenn das Spiel beendet ist
  youInput = 0;
  computerInput = Math.floor(Math.random() * 3);
  playGame(youInput, computerInput);
  youDisplay.textContent = "✊";
  displayComputerInput(computerInput);
  displayRounds();
});
paper?.addEventListener("click", () => {
  if (isGameOver) return; // Nicht spielen, wenn das Spiel beendet ist
  youInput = 1;
  computerInput = Math.floor(Math.random() * 3);
  playGame(youInput, computerInput);
  youDisplay.textContent = "✋";
  displayComputerInput(computerInput);
  displayRounds();
});
scissors?.addEventListener("click", () => {
  if (isGameOver) return; // Nicht spielen, wenn das Spiel beendet ist
  youInput = 2;
  computerInput = Math.floor(Math.random() * 3);
  playGame(youInput, computerInput);
  youDisplay.textContent = "✌️";
  displayComputerInput(computerInput);
  displayRounds();
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

  roundsPlayed++;
  if (roundsPlayed >= totalRounds) {
    endGame();
  }
}

function endGame() {
  isGameOver = true; // Das Spiel ist beendet

  rock.style.display = "none";
  paper.style.display = "none";
  scissors.style.display = "none";

  const lastParagraph = document.querySelector(
    "#lastParagraph"
  ) as HTMLParagraphElement;
  lastParagraph.textContent = "👇";

  if (youScore > computerScore) {
    infoDisplay.textContent = "You win the game!";
  } else if (computerScore > youScore) {
    infoDisplay.textContent = "The computer wins the game!";
  } else {
    infoDisplay.textContent = "It's a draw!";
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

function displayRounds() {
  roundCounter++;
  radioBtnDiv.style.fontSize = "1.6rem";
  radioBtnDiv.textContent = `${roundCounter}/${totalRounds}`;
}
