function playRound(playerSelection, computerSelection) {
    function playerChoice() {
        let playerEntry = prompt("Choose a hand.");
        return playerEntry.charAt(0).toUpperCase() + playerEntry.substring(1).toLowerCase();
    }
    playerSelection = playerChoice();
    console.log("You chose " + playerSelection);

    function computerChoice() {
        let handChoices = ["Rock", "Paper", "Scissors"];
        handResult = Math.floor(Math.random() * handChoices.length);
        //console.log(handChoices[handResult]);
        return handChoices[handResult]
    }
    computerSelection = computerChoice();
    console.log("Your opponent chose " + computerSelection);

    if (playerSelection == computerSelection) {
        console.log("Draw. Choose again.");
    }
    if (playerSelection == "Rock" && computerSelection == "Scissors" ||
        playerSelection == "Paper" && computerSelection == "Rock" ||
        playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log("You win!");
    }
    if (playerSelection == "Rock" && computerSelection == "Paper" ||
        playerSelection == "Paper" && computerSelection == "Scissors" ||
        playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log("You lose!");
    }
}

playRound();

/*
OLD ANSWER

// computer
let compAnswer = "";

function compHandConvert() {
    compAnswer = Math.floor(Math.random() * 3);
    if (compAnswer == 0) {
        return "Rock";
    } else if (compAnswer == 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

let compHand = compHandConvert();


// player
let handPrompt = "Please choose rock, paper, or scissors.";
let userAnswer = prompt(handPrompt);

function playerHandCapitalize(correctedAnswer = userAnswer) {
    return correctedAnswer.charAt(0).toUpperCase() + userAnswer.substring(1).toLowerCase()
}

let playerHand = playerHandCapitalize();

let userTest = 0;
while (userTest == 0) {
    if(playerHand === "Rock" || playerHand === "Paper" || playerHand === "Scissors") {
        userTest = 1;
    } else {
        alert("Please choose rock, paper, or scissors.");
        userTest = 2;
    }
}


// result comparison
function gameResult() {
    if (compHand == playerHand) {
        console.log("You both chose the same hand. Please choose again.");
    } else if (compHand == "Scissors" && playerHand == "Paper") {
        console.log("You lose. Please try again.")
    } else if (compHand == "Rock" && playerHand == "Scissors") {
        console.log("You lose. Please try again.")
    } else if (compHand == "Paper" && playerHand == "Rock") {
        console.log("You lose. Please try again.")
    } else if (compHand == "Paper" && playerHand == "Scissors") {
        console.log("You win. Congratulations!")
    } else if (compHand == "Scissors" && playerHand == "Rock") {
        console.log("You win. Congratulations!")
    } else if (compHand == "Rock" && playerHand == "Paper") {
        console.log("You win. Congratulations!")
    } else {
        console.log("Please reload to try again.");
    }
}

// print result
console.log("You chose " + playerHand);
console.log("Your opponent chose " + compHand);
gameResult();
*/