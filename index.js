let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
  let randomChoice = Math.floor(Math.random() * 3) + 1;

  if (randomChoice === 1) {
    return "Rock"; //console.log();
  } else if (randomChoice === 2) {
    return "Paper"; //console.log();
  } else {
    return "Scissors"; //console.log();
  }
};

let getHumanChoice = () => {
  let humanChoice = prompt("Enter choice: ");
  return (
    humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase()
  );
};

let playRound = (human, computer) => {
  console.log("");
  console.log("Human: " + human);
  console.log("Computer: " + computer);

  if (
    (human === "Rock" && computer === "Rock") ||
    (human === "Paper" && computer === "Paper") ||
    (human === "Scissors" && computer === "Scissors")
  ) {
    console.log("It's a tie!");
    console.log("");
  } else if (
    (human === "Rock" && computer === "Paper") ||
    (human === "Paper" && computer === "Scissors") ||
    (human === "Scissors" && computer === "Rock")
  ) {
    console.log(`You lose! ${computer} beats ${human}`);
    computerScore++;
    console.log("");
  } else {
    console.log("You win!");
    humanScore++;
    console.log("");
  }
};

let humanSelection = getHumanChoice;
let computerSelection = getComputerChoice;

let playGame = () => {
  playRound(humanSelection(), computerSelection());
  console.log("Your score: " + humanScore);
  console.log("Computer score: " + computerScore);
};

let helperPlayGame = (number) => {
  for (let i = 1; i <= number; i++) {
    playGame(humanSelection, computerSelection);
  }

  if (humanScore === computerScore) {
    console.log("---------------------------------------");
    console.log("The round concludes. IT'S A TIE!");
  } else if (humanScore > computerScore) {
    console.log("---------------------------------------");
    console.log("Congratulations! YOU WIN THE 5 ROUNDS.");
  } else {
    console.log("---------------------------------------");
    console.log("YOU LOSE THE 5 ROUNDS!");
  }
};

helperPlayGame(5);
