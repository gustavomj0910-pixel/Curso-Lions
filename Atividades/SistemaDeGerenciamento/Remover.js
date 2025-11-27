const { usuarios } = require('./Usuários');

function removerUsuario(id, confirmar) {
    id = Number(id);

    const index = usuarios.findIndex(u => u.id === id);

    if (index === -1) {
        console.log('Erro: usuário não encontrado!');
        return;
    }

    if (!confirmar) {
        console.log('Confirme a remoção passando "Sim" na próxima chamada.');
        return;
    }

    usuarios.splice(index, 1);
    console.log('Usuário removido com sucesso.');
}

module.exports = removerUsuario;