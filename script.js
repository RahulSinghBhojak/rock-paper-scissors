// initializing global variable for scores
let humanScore = 0;
let computerScore = 0;
let tied = 0;
// code for cpu guessing
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissor";
  }
}

// code for human input
function getHumanChoice() {
  let humanChoice = prompt("Enter the choice :");
  return humanChoice;
}

// main game logic
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "t";
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissor") {
      return "w";
    } else if (computerChoice === "paper") {
      return "l";
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "scissor") {
      return "l";
    } else if (computerChoice === "rock") {
      return "w";
    }
  } else if (humanChoice === "scissor") {
    if (computerChoice === "rock") {
      return "l";
    } else if (computerChoice === "paper") {
      return "w";
    }
  }
}

// calculating score
function matchScore(result) {
  if (result === "w") {
    humanScore += 1;
  } else if (result === "l") {
    computerScore += 1;
  } else {
    tied += 1;
  }
}

// explain funtion
function explain(result, humanChoice, computerChoice) {
  if (result === "w") {
    console.log(`you win! ${humanChoice} beats ${computerChoice}`);
  } else if (result === "l") {
    console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
  } else {
    console.log("match tied this time");
  }
}

// check human input and convert it into lower case
function checkHumanChoice(humanChoice) {
  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissor"
  ) {
    return "valid";
  } else {
    alert("enter valid option! PLAY AGAIN");
    return "notValid";
  }
}

// print the result
function printTheResult(humanChoice, computerChoice) {
  let result = playRound(humanChoice, computerChoice);
  matchScore(result);
  console.log("human choice : ", humanChoice);
  console.log("computer choice : ", computerChoice);
  explain(result, humanChoice, computerChoice);
}

// code for 1st round
function playRoundOne() {
  console.log("round 1");
  let humanChoice = getHumanChoice().toLowerCase();
  let computerChoice = getComputerChoice();
  let validOrNot = checkHumanChoice(humanChoice);
  if (validOrNot == "valid") {
    printTheResult(humanChoice, computerChoice);
  } else {
    playRoundOne();
  }
}

// code for 2nd round
function playRoundTwo() {
  console.log("round 2");
  let humanChoice = getHumanChoice().toLowerCase();
  let computerChoice = getComputerChoice();
  let validOrNot = checkHumanChoice(humanChoice);
  if (validOrNot === "valid") {
    printTheResult(humanChoice, computerChoice);
  } else {
    playRoundTwo();
  }
}

// code for 3rd round
function playRoundThree() {
  console.log("round 3");
  let humanChoice = getHumanChoice().toLowerCase();
  let computerChoice = getComputerChoice();
  let validOrNot = checkHumanChoice(humanChoice);
  if (validOrNot == "valid") {
    printTheResult(humanChoice, computerChoice);
  } else {
    playRoundThree();
  }
}

// code for 4th round

function playRoundFour() {
  console.log("round 4");
  let humanChoice = getHumanChoice().toLowerCase();
  let computerChoice = getComputerChoice();
  let validOrNot = checkHumanChoice(humanChoice);
  if (validOrNot == "valid") {
    printTheResult(humanChoice, computerChoice);
  } else {
    playRoundFour();
  }
}

// code for 5th round

function playRoundFive() {
  console.log("round 5");
  let humanChoice = getHumanChoice().toLowerCase();
  let computerChoice = getComputerChoice();
  let validOrNot = checkHumanChoice(humanChoice);
  if (validOrNot == "valid") {
    printTheResult(humanChoice, computerChoice);
  } else {
    playRoundFive();
  }
}

// printing the result
playRoundOne();
playRoundTwo();
playRoundThree();
playRoundFour();
playRoundFive();
console.log("result");
console.log("Your Score : ", humanScore);
console.log("Computer Score : ", computerScore);
console.log("tied mathes : ", tied);
