// initializing global variable for scores
let humanScore = 0;
let computerScore = 0;
let tied = 0;
let count = 2;

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
    alert("Yay! you won");
    humanScore += 1;
  } else if (result === "l") {
    alert("oops! you lose");
    computerScore += 1;
  } else if (result === "t") {
    alert("it's a tie !");
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

// print the result
function printTheResult(humanChoice, computerChoice) {
  console.log("human choice : ", humanChoice);
  console.log("computer choice : ", computerChoice);
}

// code for play the Game
function playTheGame() {
  const button = document.querySelectorAll(".choice");
  button.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      if (count > 6) {
        alert("GAME OVER");
        return;
      } else if (count === 6) {
        if (humanScore > computerScore) {
          document.querySelector("#finalResult").textContent =
            `yay! you won the game`;
        } else {
          document.querySelector("#finalResult").textContent =
            `oops! better luck next time`;
        }
      }
      document.querySelector("#round").textContent = `Round ${count}`;
      let humanChoice = e.target.id;
      let computerChoice = getComputerChoice();

      let result = playRound(humanChoice, computerChoice);
      matchScore(result);
      printTheResult(humanChoice, computerChoice);
      explain(result, humanChoice, computerChoice);
      document.querySelector("#humanResult").textContent =
        `Your Score : ${humanScore}`;
      document.querySelector("#computerResult").textContent =
        `Computer Score : ${computerScore}`;
      count++;
    }),
  );
}

// printing the result
playTheGame();
matchScore();
