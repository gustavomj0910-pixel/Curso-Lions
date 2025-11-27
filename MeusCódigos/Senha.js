
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const min = 4;

rl.question("Digite o tamanho máximo da senha (mínimo é 4): ", (max) => {

    max = Number(max);

    if (isNaN(max) || max < min) {
        console.log(`Valor inválido! O máximo deve ser um número maior ou igual a ${min}.`);
        rl.close();
        return;
    }

    const tamanho = Math.floor(Math.random() * (max - min + 1)) + min;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

    let senha = "";
    for (let i = 0; i < tamanho; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        senha += chars[randomIndex];
    }

    console.log(`✅ Sua senha aleatória (entre 4 e ${max} caracteres): ${senha}`);

    rl.close();
});

