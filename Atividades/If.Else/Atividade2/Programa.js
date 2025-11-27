const prompt = require('prompt-sync')();

const resposta = prompt('Você gosta de café? Sim/Não ');
if (resposta === 'Sim') {
    console.log ('Que bom! Café é bom para começar o dia.');
} else if ( resposta === 'Não') {
    console.log ('Tudo bem! Todos nós temos gostos diferentes.');
} else {
    console.log ('Sinto muito, eu não entendi sua resposta.');
}