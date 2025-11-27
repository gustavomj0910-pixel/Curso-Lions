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

        let situacao;

        if (media < 8) {
            situacao = 'Reprovado';
        } else {
            situacao = 'Aprovado';
        }

        switch (situacao) {
            case 'Reprovado':
                console.log ('Que pena, você não passou! Sua média foi ' + media);
                break;
            case 'Aprovado':
                console.log ('Parabéns, você passou! Sua média foi ' + media);
                break;
        }

        rl.close();
    });
});