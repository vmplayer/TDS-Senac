const rl = require('readline-sync')

const frutas = [
    { id: 0, nome: "maca", tempo: 2, valor: 0.72, quantidade: 134 },
    { id: 1, nome: "banana", tempo: 1, valor: 0.86, quantidade: 97 },
    { id: 2, nome: "pera", tempo: 4, valor: 0.52, quantidade: 40 },
    { id: 3, nome: "maracuja", tempo: 2, valor: 0.63, quantidade: 46 }
]

let final = false
let response
let resultado
let valor = 0

// Funções e gerenciamento do carrinho

let carrinho = []

function addItem(fruta, valorAtual) {
    fruta.quantidade--

    carrinho.push(fruta)
    valor += valorAtual

}

function viewCart() {
    if (carrinho.lenght === 0) {
        console.log("O seu carrinho está vazio.")
    } else {
        for (let i = 0; i < carrinho.length; i++) {
            const item = carrinho[i]
            console.log(item.nome)
        }
    }

    console.log(`\nValor final: R\$${valor.toFixed(2)}.`)
}

// Interface

console.clear()

const opcoes = ["- Maca", "- Banana", "- Pera", "- Maracuja", "- Carrinho"]
while (!final) {
    console.log("=== VENDA DE FRUTAS ===")
    console.log("Venha, venha! Nossas frutas são de ótima qualidade, compre conosco e depois compre de novo!")

    response = rl.keyInSelect(opcoes, 'O que voce deseja comprar? ', { cancel: '- Finalizar a compra' })

    if (response === -1) {
        final = true

        console.clear()
        console.log("=== VENDA DE FRUTAS ===")
        console.log("Venha, venha! Nossas frutas são de ótima qualidade, compre conosco e depois compre de novo!")
        console.log()
        console.log("Compra finalizada!")
        console.log(`O valor total da compra ficou em: R\$${valor.toFixed(2)}.`)

    } else if (frutas.quantidade === 0) {
        resultado = frutas.find(f => f.quantidade === response)
        
        console.log("O item que você deseja está fora de estoque.")
    } else if (response === 4) {
        console.log("Carrinho Acessado!")

        viewCart()

        volt = rl.keyIn('[0] - Fechar o carrinho', { limit: '0' })
    } else {
        resultado = frutas.find(f => f.id === response)
        tempo = frutas.find(f => f.tempo === response)
        let valorFruta = resultado.valor

        console.clear()
        
        // Aplica 30% de desconto se tiver mais de 3 dias de prateleira.
        if (resultado.tempo >= 3) {
            console.log("[PROMOÇÃO] Como a sua fruta está há mais de 3 dias na prateleira, estamos aplicando 30% de desconto!")
            console.log("Valor sem desconto: R$" + valorFruta.toFixed(2))
            valorFruta *= 0.7
            console.log("Valor com desconto: R$" + valorFruta.toFixed(2))
        } else {

        }

        addItem(resultado, valorFruta)

        console.log(`Você adicionou ${resultado.nome} na cesta.`)
        console.log(`Seu carrinho está avaliado em R\$${valor.toFixed(2)}.`)
        console.log()
    }
}
