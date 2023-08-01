const choices = ["Rock", "Paper", "Scissors"];
const playerSelection = prompt("Choose rock, paper, or scissors");
let i = 0;
let playerHand;
let cpuHand;
let playerScore = 0;
let cpuScore = 0;

for (const choice of choices) {
    playerHand = playerSelection.toLowerCase();
    if (choice.toLowerCase() === playerHand) {
        playerHand = choice;
        console.log(`You chose ${choice}.`);
        i++
        break;
    }
} if (i < 1) {
    console.log("Choose again.");
}

function cpuChoice() {
    cpuHand = choices[(Math.floor(Math.random() * choices.length))];
} if (i > 0) {
    cpuChoice();
    console.log(`Your oppenent chose ${cpuHand}.`);
    i++
}

if (i > 1) {
    if (playerHand === cpuHand) {
        console.log(`Tie! You both chose ${playerHand}.`);
    } else if (playerHand == "Rock" && cpuHand == "Paper" ||
        playerHand == "Paper" && cpuHand == "Scissors" ||
        playerHand == "Scissors" && cpuHand == "Rock") {
            console.log("You lose!");
            cpuScore++
    } else {
        console.log("You win!");
        playerScore++
    }
    i++
} if (i > 2) {
    console.log(`The current score is:
You: ${playerScore}
CPU: ${cpuScore}`);
}