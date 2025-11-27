const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question ('Digite o número da tabuada que deseja: ', (resposta) => {
    const tabuada = Number(resposta);
    console.log (`\nTabuada do ${tabuada}:\n`);

    for (let i = 1; i <= 10; i++) {
        console.log (`${tabuada} x ${i} = ${tabuada * i}`);
    }
    
    rl.close();
});