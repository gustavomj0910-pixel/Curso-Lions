let carrinho = ['Arroz', 'Feijão'];

carrinho.unshift ('Macarrão');
carrinho.pop();

if (carrinho.length >= 2) {
    console.log ('Carrinho cheio.');
} else {
    console.log ('Ainda há espaço no carrinho.');
}

console.log ('Espaço do carrinho:', carrinho);