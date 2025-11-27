const prompt = require('prompt-sync')();

const nome = prompt('Qual é o seu nome? ');
const idade = Number(prompt('Quantos anos você tem? '));
const aniversario = prompt('Você já fez aniversário este ano? Sim/Não ');
const anoAtual = 2025;
let anoNascimento;

if (aniversario === 'Sim') {
    anoNascimento = anoAtual - idade;   
} else {
    anoNascimento = anoAtual - idade - 1;
}

if (idade >=18) {
    console.log (nome + ', você já é maior de idade.');
} else {
    const faltam = 18 - idade;
    console.log (nome + ', você vai ser maior de idade em menos de ' + faltam + ' ano(s).');
}

console.log ('Além disso, você nasceu em ' + anoNascimento)    