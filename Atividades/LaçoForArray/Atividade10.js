let precos = [10, 20, 35, 50, 5];

for (let i = 0; i < precos.length; i++) {
    let novoPreco = precos[i] * 1.1;
    console.log ('Novo preço: R$ ' + novoPreco.toFixed(2));
}