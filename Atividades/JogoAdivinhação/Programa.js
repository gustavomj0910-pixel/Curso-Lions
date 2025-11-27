const prompt = require('prompt-sync')();

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

console.log ('Bem-vindo ao Jogo de Adivinhação!');
console.log ('Tente adivinhar o número entre 1 e 100.');

while (true) {
    const resposta = prompt('Digite seu palpite: ');
    const palpite = Number(resposta);
    tentativas++;

    if (isNaN(palpite)) {
        console.log ('❌​ Por favor, digite um número válido!');
        continue;
    }

    if (palpite < numeroSecreto) {
        console.log ('O número secreto é maior.');
    } else if (palpite > numeroSecreto) {
        console.log ('O número secreto é menor.');
    } else {
        console.log (`Parabéns! 🎉​ Você acertou o número ${numeroSecreto} em ${tentativas} tentativas!`);
        break;
    }
}