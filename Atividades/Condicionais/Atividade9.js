let convidados = ['Ana', 'Bruno', 'Carlos', 'Diana', 'Eduardo'];
let convidadoVIP = convidados.slice(0, 3);

if (convidados.length > 3) {
    console.log ('Apenas os 3 primeiros foram convidados para o jantar VIP.');
} else {
    console.log ('Todos foram convidados.');
}

console.log ('Convidados VIP:', convidadoVIP);