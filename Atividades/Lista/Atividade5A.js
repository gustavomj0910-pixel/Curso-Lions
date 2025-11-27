let precos = [1.99, 4.99, 7.99, 10.0, 15.0]
let soma = 0;

for (let i = 0; i < precos.length; i++) {
    console.log(precos[i]);
    soma += precos[i];
}

let media = soma / precos.length;
console.log ('A média dos preços é: ' + media.toFixed(2));