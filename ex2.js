/*Exercício 2 – Percorrendo um array
Crie um array chamado numeros com os valores [1, 2, 3, 4, 5].
Tarefas:
Utilize um laço for para percorrer o array.	
Mostre cada número no console.*/

let numeros = [1,2,3,4,5]
exibirLista(numeros)
exibirItens(numeros)

// FUNÇÕES
function exibirItens(lista){
    for(let i = 0; i<lista.length;i++){
    console.log(lista[i])
}}

function exibirLista(lista){
    console.log("Lista:",lista)
}

