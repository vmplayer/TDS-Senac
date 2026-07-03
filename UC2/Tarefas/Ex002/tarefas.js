const rl = require('readline-sync')

console.log("=== PARTE 1 ===\n")

let nomeUm = rl.question('Qual o seu nome? ')

console.log(`Olá, ${nomeUm}.`)

console.log("\n=== PARTE 2 ===\n")

let nomeDois = rl.question('Qual o seu nome? ')
let idadeDois = rl.questionInt('Qual a sua idade? ')
let cidadeDois = rl.question('Qual a sua cidade? ')

console.log("Seu nome e: " + nomeDois)
console.log("Sua idade e: " + idadeDois)
console.log("Sua cidade e: " + cidadeDois)

console.log("\n=== PARTE 3 === \n")

let numOne = rl.questionInt('Diga um numero: ')
let numTwo = rl.questionInt('Diga outro numero: ')
let somaOne = numOne + numTwo

console.log(`O valor total da soma e ${somaOne}.`)

console.log("\n=== PARTE 4 === \n")

let numUm = rl.questionInt('Diga um valor numerico: ')
let numDois = rl.questionInt('Diga outro valor numerico: ')

let soma = numUm + numDois
let subt = numUm - numDois
let mult = numUm * numDois
let divs = numUm / numDois

console.log('')
console.log('Fizemos alguns calculos com o que voce nos forneceu! Veja aqui.')
console.log(`A soma dos valores e: ${soma}`)
console.log(`A subtracao entre os valores e: ${subt}`)
console.log(`A multiplicacao entre os valores e: ${mult}`)
console.log(`A divisao entre os valores e: ${divs}`)

console.log("\n=== PARTE 5 === \n")

let asn = rl.questionInt('Diga um numero. Vamos calcular o antecessor e o sucessor dele para voce: ')

let suc = asn + 1
let ant = asn - 1

console.log(`Antecessor: ${ant}`)
console.log(`Sucessor: ${suc}`)

console.log("\n=== PARTE 6 === \n")

let notaUm = rl.questionInt('Diga uma nota: ')
let notaDois = rl.questionInt('Diga a outra nota: ')
let media = (notaUm + notaDois) / 2

console.log(`A media e: ${media}.`)

console.log('\nFim da ação.')
