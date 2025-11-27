const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let notas = [];

rl.question ('Digite a nota da prova 1:', (prova1) => {
    rl.question ('Digite a nota da prova 2: ', (prova2) => {

        prova1 = parseFloat(prova1);
        prova2 = parseFloat(prova2);

        notas.push (prova1, prova2);

        let media = (notas[0] + notas[1]) / 2;

        console.log (`A média das notas é: ${media}`);

        rl.close();
    });
});