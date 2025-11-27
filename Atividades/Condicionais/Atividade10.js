let participantes = [];

participantes.push ('Pedro');
participantes.push ('Gustavo');
participantes.push ('Nayane');
participantes.push ('José');

if (participantes.length > 3) {
    participantes.pop();
    console.log ('Número máximo de participantes atingido. O último foi removido.');
} else {
    console.log ('Ainda há vagas disponíveis.');
}

console.log ('Lista final de participantes:', participantes);