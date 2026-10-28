let humanScore = 0;
let computerScore = 0;
const humanScoreEl = document.querySelector("#humanScore");
const computerScoreEl =  document.querySelector("#computerScore");
const rockBtn = document.getElementById("rock");
const scissorsBtn =  document.getElementById("scissors");
const paperBtn =  document.getElementById("paper");
const roundEl = document.querySelector("#roundTable");
let currentRound = 0;
const resultEl = document.querySelector("#result");

rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
})

scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})

paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
})

function getComputerChoice() {
        const choices = ["rock", "scissors", "paper"];
        const random = Math.floor(Math.random() * choices.length);
        return choices[random];

}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === computerChoice) {
        resultEl.textContent = "it's a tie, unfortunately no winner, *sigh* disappointed"
        resultEl.style.color = "white";
    } else if ((humanChoice === "rock" && computerChoice === "scissors")|| (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        humanScoreEl.textContent = `Human: ${humanScore}`;
        resultEl.textContent = "You win! Good Job!";
        resultEl.style.color = "green";
    } else if ((humanChoice === "rock" && computerChoice === "paper") ||(humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore++;
        computerScoreEl.textContent = `Computer: ${computerScore}`;
        resultEl.textContent =  "I guess you don't have good fortune for now! Try again!";
        resultEl.style.color = "red";
    }

    

    currentRound++;
    roundEl.textContent = `Round: ${currentRound}`;
    if(humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            resultEl.textContent = "CONGRATULATIONS! YEAH YEAH YOU WIN! ANYWAY NEXT GAME?";
            resultEl.style.color = "green";
        } else if (computerScore > humanScore) {
            resultEl.textContent = "HAHA! YOU LOST! WELL DONE COMPUTER! NEXT GAME?";
            resultEl.style.color = "red";
        } else {
            resultEl.textContent = "TIE? ALRIGHT! NO WINNER! NEXT GAME?";
            resultEl.style.color = "white";
        }
        rockBtn.disabled = true;
        scissorsBtn.disabled = true;
        paperBtn.disabled = true;
    }
}






