const prompt = require('prompt-sync')();

console.log ('Calculadora');
let operador;
let resultado = 0;

function somar (num1, num2) {
    return num1 + num2;
}

function subtrair (num1, num2) {
    return num1 - num2;
}

function multiplicar (num1, num2) {
    return num1 * num2;
}

function dividir (num1, num2) {
    return num1 / num2;
}

function porcentagem (num1, num2) {
    return (num1 * num2) / 100;
}

while (operador !='x') {
    console.log (
        '\nQual operação você quer executar?\n' +
        '+ | Somar\n' +
        '- | Subtrair\n' +
        '* | Multiplicar\n' +
        '/ | Dividir\n' +
        '% | Porcentagem\n' +
        '= | Ver resultado\n' +
        'x | Cancelar\n'
    );

    operador = prompt('Escolha uma opção: ');

switch (operador) {
    case '+':
        num = Number(prompt('Digite o primeiro número: '));
        resultado = somar(resultado, num);
        break;

    case '-':
        num = Number(prompt('Digite o primeiro número: '));
        resultado = subtrair(resultado, num);
        break;

    case '*':
        num = Number(prompt('Digite o primeiro número: '));
        resultado = multiplicar(resultado, num);
        break;

    case '/':
        num = Number(prompt('Digite o primeiro número: '));
        resultado = dividir(resultado, num);
        break;

    case '%':
        num = Number(prompt('Digite o número: '));
        resultado = porcentagem(resultado, num);
        break;

    case '=':
        console.log ('Resultado: ' + resultado);
        break;

    case 'x':
        console.log ('Encerrado');
        break;

    default:
        console.log ('Opção inválida')
        break;
    }
}