const rl = require('readline-sync')

let nome = rl.question("Qual o seu nome? ")
let idade = rl.questionInt("Qual a sua idade? ")

console.log(`Olá, ${nome}. Você tem ${idade} anos.`)

/*
    rl = Readline Sync
    question = perguntar algo

    questionInt = perguntar e armazenar um NÚMERO.
    +>  SE for digitado um texto:
            Qual a sua idade? dez 
            Input valid number, please.
            Qual a sua idade?
    
    a

*/
