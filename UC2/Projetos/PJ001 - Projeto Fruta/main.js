const rl = require('readline-sync')

let final = false
const frutas = [
    { id: 0, nome: "maca", tempo: 2, valor: 0.72 },
    { id: 1, nome: "banana", tempo: 1, valor: 0.86 },
    { id: 2, nome: "pera", tempo: 4, valor: 0.52 },
    { id: 3, nome: "maracuja", tempo: 2, valor: 0.63 }
]

let resultado

// let sim = frutas.includes("nome")
// console.log(`AQUI >>>>> ${sim}`)

let valor = 0

// Gerenciamento de estoque e carrinho

let estoque = []
let carrinho = []
let items = []

console.clear()

const opcoes = ["Maca", "Banana", "Pera", "Maracuja", "Carrinho"]
let response
while (!final) {
    response = rl.keyInSelect(opcoes, 'O que voce deseja comprar? ', { cancel: 'Finalizar a compra' })

    console.log("=== VENDA DE FRUTAS ===")
    console.log("Venha, venha! Nossas frutas são de ótima qualidade, compre conosco e depois compre de novo!")

    if (response === -1) {
        final = true

        console.clear()
        console.log("Compra finalizada!")
        console.log(`O valor total da compra ficou em: R\$${valor.toFixed(2)}.`)

    } else if (items === 0) {

    } else if (response === 4) {
        console.log("Carrinho Acessado!")
        final = true
    } else {
        resultado = frutas.find(f => f.id === response)
        tempo = frutas.find(f => f.tempo === response)
        let valorFruta = resultado.valor

        console.clear()
        
        // Aplica 30% de desconto se tiver mais de 3 dias de prateleira.
        if (resultado.tempo >= 3) {
            console.log("[PROMOÇÃO] Como a sua fruta está há mais de 3 dias na prateleira, estamos aplicando 30% de desconto!")
            valorFruta *= 0.7
        }

        valor = valor + valorFruta

        console.log(`Você adicionou ${resultado.nome} na cesta.`)
        console.log(`Seu carrinho está avaliado em R\$${valor.toFixed(2)}.`)
    }
}
