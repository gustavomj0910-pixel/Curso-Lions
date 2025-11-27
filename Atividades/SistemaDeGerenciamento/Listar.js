const { usuarios } = require('./Usuários');

function listarUsuarios() {
    if (usuarios.length === 0) {
        console.log('Nenhum usuário cadastrado.');
        return;
    }

    console.log('Lista de usuários: ');
    usuarios.forEach(u => {
        console.log(`Id: ${u.id}`);
        console.log(`Nome: ${u.nome}`);
        console.log(`Email: ${u.email}`);
        console.log(`Telefones: ${u.telefones.join(', ')}`);
    });
}

module.exports = listarUsuarios;