let estoque = [12, 0, 5, 8, 0, 3];

for (let i = 0; i < estoque.length; i++) {
    if (estoque[i] === 0) {
        console.log (`Produto ${i+1} está em falta.`);
    } else {
        console.log (`Produto ${i+1} disponível.`);
    }
}