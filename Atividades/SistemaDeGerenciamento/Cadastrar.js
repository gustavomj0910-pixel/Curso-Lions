const { usuarios, gerarId } = require('./Usuários');

function cadastrarUsuario(nome, email, telefone) {
    const emailExistente = usuarios.some(u => u.email === email);
    if (emailExistente) {
        console.log('Erro: este e-mail já está em uso!');
        return;
    }

    usuarios.push({
        id: gerarId(),
        nome,
        email,
        telefones: [telefone]
    });

    console.log('Usuário cadastrado com sucesso.');
}

module.exports = cadastrarUsuario;