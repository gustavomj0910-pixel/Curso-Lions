// Atividade Ímpar e Par

let resposta
console.log ('Digite um número')
process.stdin.once('data', function(data) {
    resposta = data.toString().trim()
    processamento(resposta)
    process.exit() //Isso encerra o processo
})

function processamento(resposta) {
    //Faça a lógica do programa aqui
}

let numero

if (numero == 0) {
    console.log ('O número que você digitou é zero, tente outro.')
} else if (numero % 2 == 0) {
    console.log ('O número é par.')
} else {
    console.log ('O número é ímpar.')
}