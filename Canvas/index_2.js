// canvas avec les tableaux et les boucles
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

context.fillStyle = 4;

const widthSquare = 60;
const heightSquare = 60;
const gap = 20;
let x, y;

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    // Math.random génère un nombre entre 0 et 1
    const random = Math.random();
    // permet de faire un carré + un espace * en plus
    x = 100 + (widthSquare + gap) * i;
    y = 100 + (heightSquare + gap) * j;

    context.beginPath();
    context.rect(x, y, widthSquare, heightSquare);
    context.stroke();
    if (0.5 == 0.5 % random.toFixed(2)) {
      context.beginPath();
      context.rect(x + 5, y + 5, widthSquare - 10, heightSquare - 10);
      context.stroke();
    }
    if (0.5 >= random) {
      context.beginPath();
      context.arc(x + 30, y + 30, 8, 0, Math.PI * 2);
      context.stroke();
    }
  }
}
