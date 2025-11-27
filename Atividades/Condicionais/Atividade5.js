let frutas = ['Maçã', 'Banana', 'Laranja', 'Uva'];

if (frutas.includes ('Manga')) {
    console.log ('Temos manga no estoque!');
} else {
    console.log ('Manga não disponível.');
    frutas.push ('Manga');
    console.log ('Manga adicionada ao estoque.')
}

console.log ('Lista de frutas:', frutas);