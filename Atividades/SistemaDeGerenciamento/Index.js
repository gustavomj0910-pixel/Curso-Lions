const readline = require('readline');

const cadastrar = require('./Cadastrar');
const listarUsuarios = require('./Listar');
const atualizar = require('./Atualizar');
const remover = require('./Remover');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// MENU
function exibirMenu() {
    console.log('=========================');
    console.log('Gerenciamento de Usuários');
    console.log('1 | Cadastrar usuário');
    console.log('2 | Listar usuários');
    console.log('3 | Atualizar usuário');
    console.log('4 | Remover usuário');
    console.log('5 | Sair');
    console.log('=========================');

    rl.question('Escolha uma opção: ', opcao => {
        switch (opcao) {
            case '1':
                rl.question('Informe o nome: ', nome => {
                    rl.question('Informe o e-mail: ', email => {
                        rl.question('Informe o telefone: ', telefone => {
                            cadastrar(nome, email, telefone);
                            exibirMenu();
                        });
                    });
                });
                break;

            case '2':
                listarUsuarios();
                exibirMenu();
                break;

            case '3':
                rl.question('Informe o ID do usuário a ser atualizado: ', id => {
                    rl.question('Informe o novo nome (deixe em branco para não alterar): ', novoNome => {
                        rl.question('Informe o novo e-mail (deixe em branco para não alterar): ', novoEmail => {
                            rl.question('Informe um telefone para adicionar (deixe em branco para não adicionar): ', telefoneAdd => {
                                rl.question('Informe o telefone para remover (deixe em branco para não remover): ', telefoneRemove => {
                                    atualizar(id, novoNome, novoEmail, telefoneAdd, telefoneRemove);
                                    exibirMenu();
                                });
                            });
                        });
                    });
                });
                break;

                case '4':
                    rl.question('Informe o ID do usuário a ser removido: ', id => {
                        id = Number(id);
                        rl.question('Tem certeza? ("Sim" para confirmar): ', confirmar => {
                            const confirmacao = confirmar.toLowerCase();
                            remover(id, confirmacao === 'sim');
                            exibirMenu();
                        });
                    });
                    break;

            case '5':
                console.log('Encerrando...');
                rl.close();
                break;

            default:
                console.log('Opção inválida!');
                exibirMenu();
        }
    });
}

exibirMenu();