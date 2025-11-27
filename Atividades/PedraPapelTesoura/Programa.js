const prompt = require('prompt-sync')();

let opcoes = ['Pedra', 'Papel', 'Tesoura'];
let escolhaUsuario = '';
let escolhaComputador = '';
let resultado = '';

escolhaUsuario = prompt('Escolha Pedra, Papel ou Tesoura: ');
escolhaUsuario = escolhaUsuario.trim();

let indiceAleatorio = Math.floor(Math.random() * opcoes.length);
escolhaComputador = opcoes[indiceAleatorio];

if (escolhaUsuario === escolhaComputador) {
    resultado = 'Empate!';
} else if (
    (escolhaUsuario === 'Pedra' && escolhaComputador === 'Tesoura') || (escolhaUsuario === 'Papel' && escolhaComputador === 'Pedra') || (escolhaUsuario === 'Tesoura' && escolhaComputador === 'Papel')
) {
    resultado = 'Você venceu!';
} else {
    resultado = 'Você perdeu!';
}

console.log (`Você escolheu: ${escolhaUsuario}`);
console.log (`Computador escolheu: ${escolhaComputador}`);
console.log (`Resultado: ${resultado}`);