const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const ctx = canvas.getContext("2d");

function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}
ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);

// ctx.fillStyle = "red";
// ctx.fillRect(50, 50, 100, 150);

// ctx.fillStyle = "green";
// ctx.fillRect(75, 75, 100, 100);

// ctx.fillStyle = "rgb(255 0 255 / 75%)";
// ctx.fillRect(25, 100, 175, 50);

// ctx.lineWidth = 5;
// ctx.strokeStyle = "white";
// ctx.strokeRect(25, 25, 175, 200);

// ctx.fillStyle = "red";
// ctx.beginPath();
// ctx.moveTo(50, 50);

// ctx.lineTo(150, 50);
// const triHeight = 50 * Math.tan(degToRad(60));
// ctx.lineTo(100, 50 + triHeight);
// ctx.lineTo(50, 50);
// ctx.fill();

// ctx.fillStyle = "white";
// // Triángulo relleno
// ctx.beginPath();
// ctx.moveTo(25, 25);
// ctx.lineTo(105, 25);
// ctx.lineTo(25, 105);
// ctx.closePath();
// ctx.fill();

// ctx.strokeStyle = "white";
// // Triángulo contorneado
// ctx.lineWidth = 3;
// ctx.strokeStyle = "white";
// ctx.beginPath();
// ctx.moveTo(125, 125);
// ctx.lineTo(125, 45);
// ctx.lineTo(45, 125);
// ctx.lineTo(45, 125);
// ctx.closePath();
// ctx.stroke();

// // funcion utilitaria para pasar de grados a radianes
// function gradARad(grados) {
//   return (grados * Math.PI) / 180;
// }

// // De 0 grados a 360 grados es un círculo completo
// ctx.beginPath();
// ctx.fillStyle = "blue";
// ctx.arc(150, 106, 50, gradARad(0), gradARad(360), false);
// ctx.fill();

// ctx.beginPath();
// ctx.strokeStyle = "yellow";
// ctx.lineWidth = 5;
// ctx.arc(300, 106, 50, gradARad(-45), gradARad(90), true);
// ctx.stroke();

// ctx.strokeStyle = "white";
// ctx.lineWidth = 1;
// ctx.font = "36px arial";
// ctx.strokeText("Texto en el lienzo", 50, 50);

// ctx.fillStyle = "red";
// ctx.font = "48px georgia";
// ctx.fillText("Texto en el lienzo", 50, 150);

// canvas.setAttribute("aria-label", "Texto en el lienzo");

// const image = new Image();
// image.src =
//   "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png";

// // image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
// image.addEventListener("load", () =>
//   ctx.drawImage(image, 40, 40, 512, 512, 50, 40, 185, 185),
// );

ctx.translate(width / 2, height / 2);

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let length = 250;
let moveOffset = 20;

for (let i = 0; i < length; i++) {
  ctx.fillStyle = `rgb(${255 - length} 0 ${255 - length} / 90%)`;
  ctx.beginPath();
  ctx.moveTo(moveOffset, moveOffset);
  ctx.lineTo(moveOffset + length, moveOffset);
  const triHeight = (length / 2) * Math.tan(degToRad(60));
  ctx.lineTo(moveOffset + length / 2, moveOffset + triHeight);
  ctx.lineTo(moveOffset, moveOffset);
  ctx.fill();

  length--;
  moveOffset += 0.7;
  ctx.rotate(degToRad(5));
}
