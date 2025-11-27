const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question ('Digite a nota (0 a 100): ', (valor) => {
    const nota = Number(valor);
    let classificacao;

    switch (true) {
        case (nota >= 90 && nota <= 100):
            classificacao = 'A';
            break;
        case (nota >= 80 && nota <= 89):
            classificacao = 'B';
            break;
        case (nota >= 70 && nota <= 79):
            classificacao = 'C';
            break;
        case (nota >= 60 && nota <= 69):
            classificacao = 'D';
            break;
        case (nota >= 0 && nota <= 59):
             classificacao = 'F';
            break;
            default:
                classificacao = 'Inválida';
    }

    if (classificacao === 'Inválida') {
        console.log ('Nota inválida. Digite um número entre 0 e 100.')
    } else {
        console.log (`Classificação: ${classificacao}`);

        if (['A', 'B', 'C'].includes(classificacao)) {
            console.log ('Parabéns! Você foi aprovado!');
        } else {
            console.log ('Você não foi aprovado, que pena.');
        }
    }

    rl.close();
});