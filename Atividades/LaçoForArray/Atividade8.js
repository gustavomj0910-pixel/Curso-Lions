const { captureRejectionSymbol } = require("events");

let alunos = ['Ana', 'Bruno', 'Carlos', 'Diana'];
let notas = [8, 4, 6, 9];

for (let i = 0; i < alunos.length; i++) {
    if (notas[i] >= 6) {
        console.log (alunos[i] + ' - Aprovado.');
    } else {
        console.log (alunos[i] + ' - Reprovado.');
    }
}