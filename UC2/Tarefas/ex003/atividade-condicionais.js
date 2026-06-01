const rl = require('readline-sync')

console.log("=== PARTE 1 === \n")

let idadeUm = rl.questionInt("Qual e a sua idade? ")
if (idadeUm >= 18 && idadeUm < 119) {
    console.log("Você e maior de idade.")
} else if (idadeUm >= 119) {
    console.log("Tu tá é morto mermãokkkkkkkkk")
} else {
    console.log("Você e menor de idade.")
}

console.log("\n === PARTE 2 === \n")

let numero = rl.question("Diga um numero: ")

if (numero > 0) {
    console.log("O número é positivo!")
} else if (numero == 0) {
    console.log("O número é zero.")
} else {
    console.log("O número é negativo.")
}

console.log("\n === PARTE 3 === \n")

let pop = rl.question("Diga um numero: ")

if (pop % 2 === 0) {
    console.log("O seu número é par")    
} else {
    console.log("O seu número é ímpar.")
}

console.log("\n === PARTE 4 === \n")

let notaUm = rl.question("Qual e a nota do seu aluno? ")

if (notaUm >= 7) {
    console.log("O aluno está aprovado!")
} else if (notaUm >= 5 && notaUm < 7) {
    console.log("O aluno está de recuperação.")
} else {
    console.log("O aluno foi reprovado.")
}

console.log("\n === PARTE 5 === \n")

let userR = 'admin'
let passW = '1234'

let user = rl.question("Usuario: ")
let password = rl.question("Senha: ")

if (user == userR && password == passW) {
    console.log("Seja bem-vindo, " + user + "!")
} else {
    console.log("Acesso de conta inválido, enviando snipers para a sua residência agora mesmo por questões de segurança aos dados da conta.")
}

console.log("\n === PARTE 6 === \n")

let valor = rl.questionInt("Digite o valor da compra: ")

if (valor >= 100) valor = valor - valor * (10 / 100)

console.log(`O valor total da compra é: R\$${valor}.`)
