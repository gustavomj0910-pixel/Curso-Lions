const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const coresFavoritas = ['preto', 'azul', 'verde'];
const coresEspeciais = [];
  
readline.question ('Digite sua cor favorita: ', (cor) => {
    const corDoUsuario = cor.toLowerCase();

    if (coresFavoritas.includes(corDoUsuario)) {
        console.log ('A sua cor favorita é uma das favoritas da turma!');
    } else {
        console.log ('A sua cor favorita é diferente, vamos adicionar à lista!');
        coresEspeciais.push (corDoUsuario);
    }

    console.log ('Cores favoritas:', coresFavoritas);
    console.log ('Cores especiais:', coresEspeciais);
    console.log ('Quantidade de cores favoritas:', coresFavoritas.length);
    console.log ('Quantidade de cores especiais:', coresEspeciais.length);

    readline.close();
});