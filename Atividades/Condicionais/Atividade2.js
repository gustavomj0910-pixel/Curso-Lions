let fila = [];

fila.push ('José');
fila.push ('Gustavo');
fila.push ('Nayane');

if (fila.length > 2) {
    fila.shift();
    console.log ('Atendimento realizado, próximo da fila entrou.');
}

console.log ('Fila atual:', fila);