const rls = require('readline-sync')

function linha(numEx) {
    if (numEx === 7) {
        console.log("\n=== DESAFIO ===\n")
    } else {
        console.log("\n=== EXERCICIO " + numEx + " ===\n")
    }
}

linha(1)

const pet = {
    nome: "Carlos",
    especie: "Barata",
    idade: 200
}

console.log(`
    Conheça meu pet hiper super duper maneiro!
    Nome: ${pet["nome"]}.
    Espécie: ${pet["especie"]}.
    idade: ${pet["idade"]} anos.
    `
)

linha(2)

console.log("Antes:")

let filme = {
    titulo: "Borat: O Segundo Melhor Repórter do Glorioso País Cazaquistão Viaja à América",
    genero: "Comédia",
    ano: "2002"
}

console.log(`
    Filme: ${filme.titulo}.
    Gênero: ${filme.genero}.
    Ano: ${filme.ano}.
    `
)

filme["ano"] = 2007
filme.diretor = "Larry Charles"

console.log("Depois:")

console.log(`
    Filme: ${filme.titulo}.
    Gênero: ${filme.genero}.
    Ano: ${filme.ano}.
    Diretor: ${filme.diretor}.
    `
)

linha(3)

function boasVindas() {
    let nomes = []

    for (i = 0; i < 3; i++) {
        let nome = rls.question("Qual o seu nome? ")
        nomes.push(nome)
    } 

    for (let nome of nomes) {
        console.log(nome)
    }
}

boasVindas()

linha(4)

function celsiusParaFahrenheit() {
    let gc = rls.questionInt('Diga a temperatura em Celsius: ')
    let gf = (gc * 9/5) + 32

    console.log(`A temperatura em Fahrenheit atual é: ${gf}.`)
}

celsiusParaFahrenheit()

linha(5)

let filmes = [
    { titulo: "Star Wars: Episódio IV - Uma Nova Esperança", duracao: 121 },
    { titulo: "Star Wars: Episódio V - O Império Contra-Ataca", duracao: 124 },
    { titulo: "Star Wars: Episódio VI - O Retorno de Jedi", duracao: 134 }
]

for (let filme of filmes) {
    console.log(`Nome: ${filme.titulo}`)
    console.log(`Duração: ${filme.duracao} minutos`)
    console.log(`Duração (horas): ${(filme.duracao / 60).toFixed(1)}h`)
}

linha(6)

function ehMaiorDeIdade(idade) {
    if (idade >= 18) {
        console.log("Maior de idade, trabalhe. Trabalhe. Trabalhe.")
        return true
    } else {
        console.log("Menor de idade, cresça e trabalhe. Cresça e trabalhe.")
        return false
    }
}

let idade = rls.questionInt("Qual a sua idade? ")
ehMaiorDeIdade(idade)

linha(7)

let contatos = [
    { nome: "", telefone: "", email: ""},
    { nome: "", telefone: "", email: ""},
    { nome: "", telefone: "", email: ""}
]

for (let contato of contatos) {
    let nome = rls.question("Informe o nome: ")
    let telefone = rls.question("Informe o numero: ")
    let email = rls.question("Informe o email: ")
    console.log()

    contato.nome = nome
    contato.telefone = telefone
    contato.email = email
}

contatos.forEach((contato, i) => {
    console.log(`\nContato ${i + 1}`)
    console.log(contato.nome)
    console.log(contato.telefone)
    console.log(contato.email)
})
