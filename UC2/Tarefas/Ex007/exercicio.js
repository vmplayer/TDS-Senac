const rls = require('readline-sync')

console.log("=== EXERCICIO 1 ===\n")

for (let i = 0; i < 20; i++) {
    console.log(i + 1)
}   

console.log("\n=== EXERCICIO 2 ===\n")

for (let i = 20; i > 0; i--) {
    console.log(i)
}

console.log("\n=== EXERCICIO 3 ===\n")

let soma = 0

for (let i = 1; i < 101; i++) {
    soma += i
}

console.log(soma)

console.log("\n=== EXERCICIO 4 ===\n")

let frutas = []

for (let i = 0; i < 5; i++) {
    frutas.push(rls.question("Diga o nome da sua fruta: "))
}

for (let i = 0; i < 5; i++) {
    console.log(frutas[i])
}

console.log("\n=== EXERCICIO 6 ===\n")

let numero = rls.questionInt('Diga um numero: ')

for (let i = 1; i < 11; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`)
}
