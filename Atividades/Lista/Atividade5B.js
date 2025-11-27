let precos = [1.99, 4.99, 7.99, 10.0, 15.0]
let maximo = precos[0];
let minimo = precos [0];

for (let i = 0; i < precos.length; i++) {
    if (precos[i] > maximo) {
        maximo = precos[i];
    }
    if (precos[i] < minimo) {
        minimo = precos[i];
    }
}

console.log ('Preço mais alto: ' + maximo);
console.log ('Preço mais baixo: ' + minimo);