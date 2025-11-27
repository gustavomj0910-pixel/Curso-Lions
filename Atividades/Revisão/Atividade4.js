const notas = [7.5, 8.0, 9.2, 6.8, 10, 5.5, 8.7, 7.0, 9.5, 8.3];

let soma = 0;
for (let i = 0; i < notas.length; i++) soma += notas[i];
const media = soma / notas.length;
console.log("Média:", media);

let maior = notas[0];
let menor = notas[0];

for (let i = 1; i < notas.length; i++) {
  if (notas[i] > maior) maior = notas[i];
  if (notas[i] < menor) menor = notas[i];
}
console.log("Maior:", maior);
console.log("Menor:", menor);

let acima = 0;
for (let i = 0; i < notas.length; i++) {
  if (notas[i] > media) acima++;
}
console.log("Acima da média:", acima);

notas.push(8.9); 
console.log("Notas atualizadas:", notas);

let reprovadas = 0;
for (let i = 0; i < notas.length; i++) {
  if (notas[i] < 8) reprovadas++;
}
console.log("Reprovadas:", reprovadas);