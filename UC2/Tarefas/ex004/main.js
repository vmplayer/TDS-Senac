const rl = require('readline-sync')

let final = false
const frutas = [
    { id: 1, nome: "maca", tempo: 2, valor: 0.72 },
    { id: 2, nome: "banana", tempo: 1, valor: 0.86 },
    { id: 3, nome: "pera", tempo: 4, valor: 0.52 },
    { id: 4, nome: "maracuja", tempo: 2, valor: 0.63 }
]

let resultado

// let sim = frutas.includes("maca")
// console.log(`AQUI >>>>> ${sim}`)

let valor = frutas.push(resultado)
let carrinho = []

// if (frutas.maca.tempo >= 3 || frutas.banana.tempo >= 3 || frutas.pera.tempo >= 3 || frutas.maracuja.tempo >= 3) {
    // Aplicar 30% de desconto se a fruta estiver na prateleira há mais de 3 dias
// }

const opcoes = ["Maçã", "Banana", "Pera", "Maracujá"]
let response
while (!final) {
    response = rl.keyInSelect(opcoes, 'O que voce deseja comprar?')

    if (response === -1) {
        final = true
        console.log("Compra finalizada!")
        console.log(`O valor total da compra ficou em: R\$${valor}`)
    } else {
        resultado = frutas.find(f => f.id === 1)
        console.log(`Você colocou ${response} na cesta.`)
        console.log(`Seu carrinho está avaliado em R\$${valor}`)
    }
}
