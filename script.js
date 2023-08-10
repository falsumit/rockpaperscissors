const handChoice = ["Rock", "Paper", "Scissors"];
let playerHand;
let playerScore = 0;
let cpuScore = 0;

const roundResult = document.querySelector('p#result-round');
const scoreSummary = document.querySelector('p#summary');
const playerTally = document.querySelector('p#score-player');
const cpuTally = document.querySelector('p#score-cpu');

function cpuChoice() {
    cpuHand = handChoice[(Math.floor(Math.random() * handChoice.length))];
} 

function printResults() {
    cpuChoice();
    if (playerHand === cpuHand) {
        roundResult.textContent = "TIE";
    } else if (playerHand == "Rock" && cpuHand == "Scissors" ||
        playerHand == "Paper" && cpuHand == "Rock" ||
        playerHand == "Scissors" && cpuHand == "Paper") {
            roundResult.textContent = "WIN";
            playerScore++
        } else {
            roundResult.textContent = "LOSE";
            cpuScore++
        }
    scoreSummary.textContent = `You chose ${playerHand}. Your opponent chose ${cpuHand}.`;
    playerTally.textContent = `Your score: ${playerScore}`;
    cpuTally.textContent = `CPU score: ${cpuScore}`;
}

const choices = document.querySelectorAll('div.rps-choice-content');
function getScores() {
    choices.forEach((choice) => {
        choice.addEventListener('click', () => {
            playerHand = choice.id;
            printResults();
        });
    });
}

getScores();