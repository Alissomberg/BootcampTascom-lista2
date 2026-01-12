/*Exercício 5 – Média e análise de dados
Crie um array chamado notas contendo as notas de um aluno (mínimo 5 notas).
Tarefas:
Calcule a média das notas.
Crie um novo array contendo apenas as notas acima da média.
Mostre no console:
Todas as notas
A média final
As notas acima da média
*/

let notas = [8,6,1,4,7]
soma = 0
media = 0
exibirLista(notas)
somar(notas)
calcularMedia(soma,notas)
exibirMedia(media)
criarListaAcimadaMedia(notas)
exibirLista(acimasdamedia)

// FUNÇÕES
function somar(lista){
   for(let i=0; i<lista.length;i++){
    soma += lista[i]
}}

function calcularMedia(soma,lista){
    media = soma/lista.length
}

function exibirMedia(valor){
    console.log("Média:",valor)
}

function criarListaAcimadaMedia(lista){
    acimasdamedia = lista.filter(nota => nota > media)
}

function exibirLista(lista){
    console.log("Lista:",lista)
}
