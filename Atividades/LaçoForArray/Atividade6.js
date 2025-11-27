let convidados = ['José', 'Henricchi', 'Nayane', 'Pedro'];
let nomeProcurado = 'Nayane';
let encontrado = false;

for (let i = 0; i < convidados.length; i++) {
    if (convidados[i] === nomeProcurado) {
        encontrado = true;
    }
}

if (encontrado) {
    console.log ('Convidado confirmado.');
} else {
    console.log ('Não está na lista.')
}