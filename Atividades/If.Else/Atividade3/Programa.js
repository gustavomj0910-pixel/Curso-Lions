const prompt = require('prompt-sync')();

const nome = prompt('Qual é o seu nome? ');
const idade = Number(prompt('Quantos anos você tem? '));

if (idade >=18) {
    console.log (nome + ', você já é maior de idade.');
} else {
    const faltam = 18 - idade;
    console.log (nome + ', você vai ser maior de idade em ' + faltam + ' anos.');
}