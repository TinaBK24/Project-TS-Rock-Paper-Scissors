import "./style.css";

const five = document.querySelector("#five") as HTMLInputElement;
const ten = document.querySelector("#ten") as HTMLInputElement;
const fifteen = document.querySelector("#fifteen") as HTMLInputElement;
const twenty = document.querySelector("#twenty") as HTMLInputElement;

const rock = document.querySelector("#rock") as HTMLDivElement;
const paper = document.querySelector("#paper") as HTMLDivElement;
const scissors = document.querySelector("#scissors") as HTMLDivElement;

const result = document.querySelector("#result") as HTMLParagraphElement;

enum gameInput {
  rock,
  paper,
  scissors,
}

let youInput: gameInput;
let computerInput: gameInput;
computerInput = Math.floor(Math.random() * 3);
console.log(gameInput[computerInput]);

rock?.addEventListener("click", () => {
  youInput = 0;
  console.log(youInput);

  return youInput;
});
paper?.addEventListener("click", () => {
  youInput = 1;
  console.log(youInput);

  return youInput;
});
scissors?.addEventListener("click", () => {
  youInput = 2;
  console.log(youInput);

  return youInput;
});

// switch(){
//     case
// }
