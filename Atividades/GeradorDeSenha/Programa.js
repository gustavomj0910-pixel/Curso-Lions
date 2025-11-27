const prompt = require('prompt-sync')();

let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
let senha = '';
let comprimentoSenha = prompt('Digite o comprimento da senha desejada: ');
comprimentoSenha = parseInt(comprimentoSenha);

for (let i = 0; i < comprimentoSenha; i++) {
    const numeroAleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres.charAt(numeroAleatorio);
}

console.log (`Sua senha gerada é: ${senha}`);