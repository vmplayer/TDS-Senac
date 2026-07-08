const rls = require('readline-sync')

// console.log("=== EXERCICIO 1 ===\n")

// const nomes = ["Anakin Skywalker", "Obi-wan", "Padmé Amidala", "Boba Fett", "Mandaloriano"]

// for (let nome of nomes) {
//     console.log(nome)
// }

// console.log("\n=== EXERCICIO 2 ===\n")

// for (let i in nomes) {
//     console.log(`${i} - ${nomes[i]}`)
// }

// console.log("\n=== EXERCICIO 3 ===\n")

// let lista = []

// console.log(`Lista atual: ${lista}\n`)


// while (lista.length < 5) {
//     let item = rls.question("Qual item voce quer adicionar? ")
//     lista.push(item)
// }
// console.log()

// lista.forEach((item, i) => {
//     console.log(`[${i + 1}] - ${item}`)
// })

// console.log("\n=== EXERCICIO 4 ===\n")

// const frutas = ["Maca", "Banana", "Maca do Notch", "Jogan", "Frutas Douradas de Lothlórien"]

// console.log("Frutas disponíveis:")
// for (let fruta of frutas) {
//     console.log(fruta)
// }

// let search = rls.question("Qual fruta voce quer pesquisar? ")
// let result = frutas.includes(search)

// if (!result) {
//     console.log("A fruta não está disponível.")
// } else {
//     console.log("A fruta desejada não foi encontrada.")
// }

// console.log("\n=== EXERCICIO 5 ===\n")

// let cidades = ["Pripyat", "Fukushima", "Goiania", "Hiroshima", "Nagasaki"]

// console.log("Cidades do nosso sistema:")
// console.log(cidades.join(", "))

// cidades.splice(2, 1)
// console.log(cidades.join(", "))

// console.log("\n=== EXERCICIO 6 ===\n")

// let langs = ["JavaScript", "Python", "Java", "C#", "PHP"]

// console.log(langs.join(" | "))

// console.log("[ALERTA] REVISE AGORA.")
// console.log("Pressione [ESPAÇO] para prosseguir para o desafio.")
// rls.keyInPause('', { limit: ' ' })

console.clear()

console.log("=== DESAFIO ===\n")

let produtos = []

while (produtos.length < 5) {
    let produto = rls.question("Qual produto voce deseja adicionar ao carrinho? ")
    produtos.push(produto)
}

produtos.forEach((item, i) => {
    console.log(`[${i + 1}] - ${item}`)
})

let qualProduto = rls.question("Qual produto voce deseja remover? ")
let resultado = produtos.includes(qualProduto)

if (resultado) {
    console.log("Sim")
} else {
    console.log("nao")
}
