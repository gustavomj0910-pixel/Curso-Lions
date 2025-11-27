let notas = [7, 5, 8, 9, 6];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma / notas.length;

if (media >= 6) {
    console.log ('Aprovado.');
} else {
    console.log ('Reprovado.')
}