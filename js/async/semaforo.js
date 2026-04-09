const stopBtn = document.querySelector("#stop");
const restartBtn = document.querySelector("#resume");

const red = document.querySelector("#red");
const yellow = document.querySelector("#yellow");
const green = document.querySelector("#green");


let currentIndex = 0;
let currentInterval;

const semaphores = {
    red: red,
    yellow: yellow,
    green: green
};

const sequence = [
    {color: "red", duration: 3000},
    {color: "yellow", duration: 1000},
    {color: "green", duration: 3000},
];

function turnOff() {
    red.style.backgroundColor = "white";
    yellow.style.backgroundColor = "white";
    green.style.backgroundColor = "white";
}

function iniciar() {
    const phase = sequence[currentIndex];
    currentIndex = (currentIndex + 1) % sequence.length;
    
    turnOff();
    clearInterval(currentInterval);

    semaphores[`${phase.color}`].style.backgroundColor = `${phase.color}`;
    console.log(`Color actual: ${phase.color}`);
    currentInterval = setInterval(iniciar, phase.duration);
}

restartBtn.addEventListener("click", () => {
    iniciar();
})

stopBtn.addEventListener("click", () => {
    clearInterval(currentInterval);
    currentInterval = null;
    console.log("Detenido!");
})
