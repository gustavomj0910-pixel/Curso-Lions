// Alternativa da atividade 2 de array, com prompt-sync ao invés de readline:

const prompt = require('prompt-sync')();

let notas = [];
let prova1 = parseFloat(prompt('Digite a nota da primeira prova: '));
let prova2 = parseFloat(prompt('Digite a nota da segunda prova: '));

notas.push (prova1);
notas.push (prova2);

let media = (notas[0] + notas[1]) / 2;

console.log (`A média das notas é ${media}.`);