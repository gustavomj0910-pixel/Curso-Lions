const { usuarios } = require('./Usuários');

function atualizarUsuario(id, novoNome, novoEmail, telefoneAdd, telefoneRemove) {
    id = Number(id);

    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        console.log('Erro: usuário não encontrado!');
        return;
    }

    if (novoNome) usuario.nome = novoNome;

    if (novoEmail) {
        const emailExistente = usuarios.some(u => u.email === novoEmail && u.id !== id);
        if (emailExistente) {
            console.log('Erro: o novo e-mail já está em uso!');
            return;
        }

        usuario.email = novoEmail;
    }

    if (telefoneAdd) {
        if (!usuario.telefones) {
            usuario.telefones = [];
        }
        usuario.telefones.push(telefoneAdd);
    }

    if (telefoneRemove) {
        usuario.telefones = usuario.telefones.filter(t => t !== telefoneRemove);
    }

    console.log('Usuário atualizado com sucesso.');
}

module.exports = atualizarUsuario;