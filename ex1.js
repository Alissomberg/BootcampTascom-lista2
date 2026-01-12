/*Exercício 1 – Criando e acessando um array
Crie um array chamado cores contendo 5 cores diferentes.
Tarefas:
Mostre no console a primeira cor do array.
Mostre no console a última cor do array.*/

let cores = ["Azul", "Amarelo", "Verde", "Rosa", "Vermelho"]
exibirLista(cores)
exibirPrimeiroElemento(cores)
exibirÚltimoElemento(cores)

// FUNÇÕES
function exibirLista(lista){
    console.log("Lista:",lista)
}

function exibirPrimeiroElemento(lista){
    console.log(lista[0])
}

function exibirÚltimoElemento(lista){
    console.log(lista[lista.length - 1])
}