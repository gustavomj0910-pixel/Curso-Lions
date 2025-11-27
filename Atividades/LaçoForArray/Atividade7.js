let temperaturas = [22, 25, 19, 30, 28, 24, 26];
let cont = 0;

for (let i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i] > 25) {
        cont++
    }
}

console.log ('Dias com a temperatura acima de 25°C: ' + cont);