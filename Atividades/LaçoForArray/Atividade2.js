let numeros = [2, 5, 8, 11, 14, 17, 20, 25, 40, 55];
let somaPares = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        somaPares += numeros[i];
    }
}

console.log ('A soma dos números pares é: ' + somaPares);