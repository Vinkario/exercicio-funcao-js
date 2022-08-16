// Faça um programa que entre com cinco números e imprima o quadrado de cada número.nu

function quadrado(num1, num2, num3, num4, num5) {
  return (
    numero1AoQuadrado,
    numero2AoQuadrado,
    numero3AoQuadrado,
    numero4AoQuadrado,
    numero5AoQuadrado
  );
}

const num1 = Number(prompt("digite o primeiro numero"));
const num2 = Number(prompt("digite o segundo numero"));
const num3 = Number(prompt("digite o terceiro numero"));
const num4 = Number(prompt("digite o quarto numero"));
const num5 = Number(prompt("digite o quinto numero"));
const numero1AoQuadrado = Math.pow(num1, 2);
const numero2AoQuadrado = Math.pow(num2, 2);
const numero3AoQuadrado = Math.pow(num3, 2);
const numero4AoQuadrado = Math.pow(num4, 2);
const numero5AoQuadrado = Math.pow(num5, 2);

document.write(
  "O Primeiro numero digitao eleveado ao quadrado é :",
  numero1AoQuadrado,
  "<br>",
  "O segundo numero digitado elevado ao quadrado é : ",
  numero2AoQuadrado,
  "<br>",
  "O terceiro numero digitado elevado ao quadrado é : ",
  numero3AoQuadrado,
  "<br>",
  "O quarto numero digitado elevado ao quadrado é : ",
  numero4AoQuadrado,
  "<br>",
  "O quinto numero digitado elevado ao quadrado é : ",
  numero5AoQuadrado
);
