/*Exercício 3 – Soma dos elementos
Crie um array chamado valores contendo 5 números.
Tarefas:
Percorra o array utilizando for.
Calcule a soma de todos os valores.
Mostre o resultado final no console.*/

let valores = [7,8,20,8,2]
soma = 0
somar(valores)
exibirLista(valores)
exibirSoma(soma)


// FUNÇÕES
function somar(lista){
   for(let i=0; i<lista.length;i++){
    soma += lista[i]
}}

function exibirLista(lista){
    console.log("Lista:",lista)
}

function exibirSoma(resultado){
    console.log("Resultado final:",resultado)
}

