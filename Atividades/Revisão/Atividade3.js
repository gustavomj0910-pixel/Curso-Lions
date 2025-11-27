const numeros = [27, 10, 3, 0, 20, 5, 6, 3];
const idade = 18;

numeros.push (idade);

const pares = [];
const impares = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push (numeros[i]);
    } else {
        impares.push (numeros[i]);
    }
}

console.log ('Números pares: ', pares);
console.log ('Números ímpares: ', impares);