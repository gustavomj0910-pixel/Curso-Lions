const prompt = require('prompt-sync')();

const nome = prompt('Qual é o seu nome? ');
let mensagem1 = 'Olá, ';
let mensagem2 = mensagem1 + nome + '.';

console.log(mensagem2);

const pergunta = prompt('Como você está hoje? ');