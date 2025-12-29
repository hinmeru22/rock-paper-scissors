const humanScoreDisplay = document.querySelector(".humanScore");
const computerScoreDisplay = document.querySelector(".computerScore");
const humanChoiceDisplay = document.querySelector(".humanChoiceDisplay");
const computerChoiceDisplay = document.querySelector(".computerChoiceDisplay");
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

// COMPUTER CHOICE

let getComputerChoice = () => {
  let randomChoice = Math.floor(Math.random() * 3) + 1;

  if (randomChoice === 1) {
    computerChoiceDisplay.textContent = "👊";
    return "rock";
  } else if (randomChoice === 2) {
    computerChoiceDisplay.textContent = "🖐️";
    return "paper";
  } else {
    computerChoiceDisplay.textContent = "✌️";
    return "scissor";
  }
};

// HUMAN CHOICE

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");
const resetBtn = document.querySelector(".resetBtn");

let getHumanChoice = (choice) => {
  if (choice === "rock") {
    humanChoiceDisplay.textContent = "👊";
    return "rock";
  } else if (choice === "paper") {
    humanChoiceDisplay.textContent = "🖐️";
    return "paper";
  } else if (choice === "scissor") {
    humanChoiceDisplay.textContent = "✌️";
    return "scissor";
  }
};

// BUTTON EVENTS

rockBtn.addEventListener("click", () => {
  playRound(getHumanChoice("rock"), getComputerChoice());
});
paperBtn.addEventListener("click", () => {
  playRound(getHumanChoice("paper"), getComputerChoice());
});
scissorBtn.addEventListener("click", () => {
  playRound(getHumanChoice("scissor"), getComputerChoice());
});
resetBtn.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  drawScore = 0;

  paperBtn.disabled = false;
  rockBtn.disabled = false;
  scissorBtn.disabled = false;

  draw.textContent = `Draw:`;
  hooman.textContent = `Human:`;
  robot.textContent = `Computer:`;
});
// PLAY ROUND

const hooman = document.querySelector(".human");
const draw = document.querySelector(".draw");
const robot = document.querySelector(".computer");

let playRound = (human, computer) => {
  if (
    (human === "rock" && computer === "rock") ||
    (human === "paper" && computer === "paper") ||
    (human === "scissor" && computer === "scissor")
  ) {
    drawScore++;
    draw.textContent = `Draw: ${drawScore}`;
  } else if (
    (human === "rock" && computer === "paper") ||
    (human === "paper" && computer === "scissor") ||
    (human === "scissor" && computer === "rock")
  ) {
    computerScore++;
    robot.textContent = `Computer: ${computerScore}`;
  } else {
    // console.log("You win!");
    humanScore++;
    hooman.textContent = `Human: ${humanScore}`;
  }

  if (humanScore === 5 && humanScore > computerScore) {
    paperBtn.disabled = true;
    rockBtn.disabled = true;
    scissorBtn.disabled = true;
  } else if (computerScore === 5 && computerScore > humanScore) {
    paperBtn.disabled = true;
    rockBtn.disabled = true;
    scissorBtn.disabled = true;
  }
};
