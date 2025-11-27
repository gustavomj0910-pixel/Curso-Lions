const prompt = require('prompt-sync')();

console.log ('Vamos calcular juros com uma taxa mensal!')
let juros1 = [];
let capital = parseFloat(prompt('Qual é o seu capital? '));
let taxa = parseFloat(prompt('Qual a taxa? (Escreva em %) '));
let tempo = parseInt(prompt('Em quantos meses? '));

juros1.push (capital);
juros1.push (taxa);
juros1.push (tempo);

let taxa1 = taxa / 100;
let juros = (juros1[0] * taxa1 * juros1[2]);

console.log (`Seu juros foi de ${juros} reais`);