let materias = ['Português', 'Matemática', 'História'];

materias.splice (2, 1, 'Geografia');

if (materias.includes ('Geografia')) {
    console.log ('Matéria substituída com sucesso!');
} else {
    console.log ('Erro ao atualizar a lista.');
}

console.log ('Matérias atuais:', materias);