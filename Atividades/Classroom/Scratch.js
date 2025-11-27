const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question ('Digite a primeira nota: ', (n1) => {
    rl.question ('Digite a segunda nota: ', (n2) => {
        const nota1 = Number(n1);
        const nota2 = Number(n2);
        const media = (nota1 + nota2) / 2;

        if (media < 8) {
            console.log ('Que pena, você não passou!! Sua média foi ' + media);
        } else {
            console.log ('Parabéns, você passou!! Sua média foi ' + media);
        }

        rl.close();
    });
});