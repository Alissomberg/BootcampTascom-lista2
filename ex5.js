/*Atividade 5 – Múltiplos de 5
Nível: Intermediário / Avançado
Crie um programa que:
Conte de 1 até 50
Utilize uma estrutura condicional para verificar quais números são múltiplos de 5
Para cada múltiplo de 5, exiba no console:
Número X é múltiplo de 5*/

for(let i = 1;i<=50;i++){
    if(i % 5 == 0){console.log(`Número ${i} é múltiplo de 5`)}
    else{console.log(`Número ${i}`)}
}
