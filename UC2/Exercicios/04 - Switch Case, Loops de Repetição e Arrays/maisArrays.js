const rl = require('readline-sync')

let compras = []

for (let i = 1; i <= 5; i++) {
    let compra = rl.question('Digite a sua compra: ')
    compras.unshift(compra)
    console.log(`Lista atualizada: ${compras}`)
}

let lista = ["Elemento X"]

console.log("Adicionar no final da lista")
lista.push("Açúcar")
console.log(`Lista atual: ${lista}`)

console.log("\nRemover no final da lista")
lista.pop()
console.log(`Lista atual: ${lista}`)

console.log("\nAdicionar no início da lista")
lista.unshift("Tudo de maneiro")
lista.unshift("Tempero")
lista.unshift("Açúcar")
lista.unshift("Elemento Y")
console.log(`Lista atual: ${lista}`)

console.log("\nRemover no início da lista")
lista.shift()
console.log(`Lista atual: ${lista}`)

console.clear()
console.log('---------------------')

console.log(`Lista atual: ${lista}`)

for (i in lista) {
    console.log(i)
}

// lista.splice(começo, quantidade, valor)

lista.splice(2, 0, "Outra coisa aqui")
console.log(`Lista atual: ${lista}`)
lista.splice(1, 1, "Tompero")
console.log(`Lista atual: ${lista}`)

console.clear()

let listaNova = ["Daniel", "Rodorlfo", "Ronaldo R9", "Australopitéco"]

let elementSearch = rl.question('Qual elemento voce quer encontrar? ')
// let n = listaNova.indexOf(elementSearch) + 1
let achou = listaNova.includes(qual)

if (n === 0) {
    console.log("O personagem não foi encontrado.")
} else {
    console.log(`O personagem que você quer é o número ${n}.`)
}
