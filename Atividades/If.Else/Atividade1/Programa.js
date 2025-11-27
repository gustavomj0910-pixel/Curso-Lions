const prompt = require('prompt-sync')();

const numero = Number(prompt('Digite um número: '));
if (numero === 0) {
    console.log ('O número 0 não é ímpar nem par, tente outro número.');
} else if (numero % 2 == 0) {
    console.log ('O número que você digitou é par.');
} else {
    console.log ('O número que você digitou é ímpar.');
}