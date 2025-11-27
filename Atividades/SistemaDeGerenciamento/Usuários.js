let usuarios = [];
let idAtual = 1;

function gerarId() {
    return idAtual++;
}

module.exports = {
    usuarios,
    gerarId
};