let produtos = ['Arroz', 'Feijão', 'Leite', 'Açúcar'];
let indice = produtos.indexOf ('Leite');

if (indice !== -1) {
    produtos.splice (indice, 1);
}

if (produtos.length > 2) {
    console.log ('Estoque suficiente.');
} else {
    console.log ('Estoque baixo!');
}

console.log ('Produtos disponíveis', produtos);