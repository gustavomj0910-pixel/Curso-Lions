let palavras = ['sol', 'computador', 'lua', 'montanha', 'céu'];
let curtas = 0;
let longas = 0;

for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].length < 5) {
        curtas++;
    } else {
        longas++;
    }
}

console.log ('Palavras curtas (menos de 5 letras): ' + curtas);
console.log ('Palavras longas (mais de 5 letras): ' + longas);