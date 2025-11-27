let espera = ['Carlos', 'Ana'];

espera.push ('João');

if (espera.length > 3) {
    console.log ('Primeiro da fila atendido.');
} else if (espera.length === 3) {
    console.log ('Fila completa.');
} else {
    console.log ('Ainda há vagas na fila.');
}

console.log ('Lista de espera:', espera);