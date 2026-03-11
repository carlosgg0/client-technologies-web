
const randomNumber = Math.floor(Math.random() * 100);
// const randomNumber = 50;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;


function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");

    for (const para of resetParas) {
        para.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";
    randomNumber = Math.floor(Math.random() * 100);
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;

    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function checkGuess() {
    const guess = Number(guessField.value);

    if (guessCount === 1) {
        guesses.textContent = "Previous guesses:";
    } else if (guessCount === 10) {
        lastResult.textContent = "GAME OVER!!!";
        lastResult.style.backgroundColor = "red";
        setGameOver();
    }

    guesses.textContent = `${guesses.textContent} ${guess}`;

    if (guess === randomNumber) {
        lastResult.textContent = "Congratulations! You got it right!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    } else {
        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = "red";
        if (guess < randomNumber) {
            lowOrHi.textContent = "Your guess was too low!";
        } else {
            lowOrHi.textContent = "Your guess was too high!";
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();

}

guessSubmit.addEventListener("click", checkGuess);
