const prompt = require('prompt-sync')();

let notas = [];
let soma = 0;
let nota1 = parseFloat(prompt('Digite sua primeira nota: '));
let nota2 = parseFloat(prompt('Digite sua segunda nota: '));
let nota3 = parseFloat(prompt('Digite sua terceira nota: '));
let nota4 = parseFloat(prompt('Digite sua quarta nota: '));

notas.push (nota1);
notas.push (nota2);
notas.push (nota3);
notas.push (nota4);

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma / notas.length;
console.log (`Sua média foi de ${media}`)

if (media >= 6) {
    console.log ('Aprovado');
} else {
    console.log ('Reprovado')
}