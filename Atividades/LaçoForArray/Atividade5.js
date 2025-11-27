let numeros = [2, 4, 5, 8, 10];
let multiplicados = [];

for (let i = 0; i < numeros.length; i++) {
    let resultado = numeros[i] * 3;
    multiplicados.push (resultado);
}

console.log ('Array original: ' + numeros);
console.log ('Array multiplicado por 3: ' + multiplicados);