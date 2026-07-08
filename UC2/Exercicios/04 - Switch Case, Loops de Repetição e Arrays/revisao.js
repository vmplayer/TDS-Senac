let array = [] // Cria um array

// Adiciona um item na lista
array.push("Daniel")
console.log(`Lista atualizada: ${array}\n`)

// Adiciona um item no começo da lista
array.unshift("Rodorlfo")
console.log(`Lista atualizada: ${array}\n`)

// Adicionar um outro elemento no meio
array.splice(1, 0, "R2D2") // splice(indice inicial, quantidade de deleção, novo elemento (opcional))
console.log(`Lista atualizada: ${array}\n`) 

// Remover um do final
array.pop()
console.log(`Lista atualizada: ${array}\n`)

// Remover um do começo da lista
array.shift()
console.log(`Lista atualizada: ${array}\n`)

let frutas = ["Maçã", "Banana", "PlayStation 5", "Abacaxi"]

// for tradicional 
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}
console.log()

// for...in
for (let i in frutas) {
    console.log(`[${i}] - ${frutas[i]}`)
}
console.log()

// for...of
for (let i of frutas) {
    console.log(i)
}

console.log('\n// -------------------------------------- //\n')

frutas.forEach(function (fruta, i) {
    console.log(`[${i + 1}] - ${fruta}`)
}) 
