/*Exercício 4 – Trabalhando com métodos
Crie um array chamado idades com pelo menos 6 idades diferentes.
Tarefas:
Use o método filter() para criar um novo array apenas com idades maiores ou iguais a 18.
Mostre o novo array no console.
*/

let idades = [10, 20, 22, 12, 15, 18]
exibirLista(idades)
criaListaMaioridade(idades)
exibirLista(maioridades)

// FUNÇÕES
function criaListaMaioridade(lista){
    maioridades = lista.filter(function(idade){
    return idade >= 18
})
}

function exibirLista(lista){
    console.log("Lista:",lista)
}

