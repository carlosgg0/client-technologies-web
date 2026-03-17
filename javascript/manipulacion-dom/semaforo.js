
const Colors = {
    RED: 1,
    YELLOW: 2,
    GREEN: 3,
    GREY: 4
};

const redSem = document.querySelector("#red");
const yellowSem = document.querySelector("#yellow");
const greenSem = document.querySelector("#green");

function setGrey() {
    redSem.classList.remove("red");
    redSem.classList.add("grey");

    yellowSem.classList.remove("yellow");
    yellowSem.classList.add("grey");

    greenSem.classList.remove("green");
    greenSem.classList.add("grey");
}

function setColor(color) {
    switch (color) {
        case Colors.GREEN:
            greenSem.classList.remove("grey");
            greenSem.classList.add("green");
            break;
        case Colors.YELLOW:
            yellowSem.classList.remove("grey");
            yellowSem.classList.add("yellow");
            break;
        case Colors.RED:
            redSem.classList.remove("grey");
            redSem.classList.add("red");
            break;
        default:
            break;
    }
}

const redBtn = document.querySelector("#red-sem");
const yellowBtn = document.querySelector("#yellow-sem");
const greenBtn = document.querySelector("#green-sem");


setGrey();

redBtn.addEventListener("click", (e) => {
    setGrey();
    setColor(Colors.RED);
})

greenBtn.addEventListener("click", (e) => {
    setGrey();
    setColor(Colors.GREEN);
})

yellowBtn.addEventListener("click", (e) => {
    setGrey();
    setColor(Colors.YELLOW);
})
