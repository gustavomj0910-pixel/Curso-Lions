const prompt = require('prompt-sync')();

let numero1 = parseInt(prompt('Digite o primeiro numero entre 0 e 4: '));
if (numero1 > 4){
    console.log ('Esse número não pode ser maior do que 4!');
}
let numero2 = parseInt(prompt('Digite o segundo numero entre 0 e 4: '));
if (numero2 > 4){
    console.log ('Esse número não pode ser maior do que 4!');
}

let numeros = [10, 20, 30, 40, 50]
let soma = numeros[numero1] + numeros[numero2];

console.log ('soma:', soma);

let numero = soma;
if (numero < 40) {
    console.log ('Esse número é menor do que 40!');
} else if (numero === 40) {
    console.log ('Esse número é igual a 40!');
} else if (numero > 40) {
    console.log ('Esse número é maior do que 40!');
}