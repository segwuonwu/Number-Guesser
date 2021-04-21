let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
}

const compareGuesses = (human, computer, target) => {
    let humanWin = getAbsoluteDistance(human, target);
    let compWin = getAbsoluteDistance(computer, target);
    if (human < 0 || human > 9) {
        alert('Guess should be between 0 and 9');
    }
    return humanWin <= compWin ? true : false;
}

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}