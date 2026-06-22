const rl = require('readline-sync')

// ATIVIDADE 1

console.clear()
console.log("=== EXERCÍCIO 1 ===")

let idade = rl.questionInt("Qual a sua idade? ")
let tam

if (idade < 0) {
    tam = "Volta quando nascer."
} else if (idade <= 12) {
    tam = "Criança"        
} else if (idade <= 17) {
    tam = "Adolescente"
} else if (idade <= 60) {
    tam = "Adulto"
} else {
    tam = "Idoso"
}

console.log(tam)

console.log("Pressione espaço para continuar.")
rl.keyInPause('', { limit: ' ' })

// ATIVIDADE 2

let jogarNovamente = true

while (jogarNovamente) {
    console.clear()
    console.log("=== EXERCÍCIO 2 ===")

    let ladoum = rl.questionInt("Diga o valor da medida de um dos lados do triangulo: ")
    let ladodois = rl.questionInt("Diga o valor do outro lado do triangulo: ")
    let ladotres = rl.questionInt("Diga o valor do terceiro lado do triangulo: ")

    if (ladoum === ladodois && ladoum === ladotres) {
        console.log("O triângulo é equilátero.")
    } else if (ladoum === ladodois || ladodois === ladotres || ladoum === ladotres) {
        console.log("O triângulo é isósceles")
    } else {
        console.log("O triângulo é escaleno.")
    }

    let denovo = rl.keyInYNStrict("Quer calcular de novo? ")

    if (denovo) {
        jogarNovamente = true
    } else {
        jogarNovamente = false
    }
}

console.log("Pressione espaço para continuar.")
rl.keyInPause('', { limit: ' ' })

// ATIVIDADE 3

console.clear()
console.log("=== EXERCÍCIO 3 ===")

let valor = rl.questionInt("Qual e o valor da compra? ")
let percent

if (valor >= 500) {
    percent = 0.15
} else if (valor >= 300) {
    percent = 0.10
} else if (valor >= 100) {
    percent = 0.05
} else {
    percent = 0
}

console.log("Valor original: " + valor)
console.log("Percentual aplicado: " + percent * 100 + "%")
console.log(`Valor final:  ${valor - (valor *= percent)}`)

console.log("Pressione espaço para continuar.")
rl.keyInPause('', { limit: ' ' })

// ATIVIDADE 4

console.clear()
console.log("=== EXERCÍCIO 4 ===")

let notaFinal = rl.questionInt("Diga a nota final do aluno: ")
let frequencia = rl.questionInt("Diga a frequencia do aluno: ")

if (frequencia < 75) {
    console.log("O aluno foi reprovado por frequência.")
} else {
    if (notaFinal >= 7) {
        console.log("O aluno foi APROVADO.")
    } else if (notaFinal >= 5) {
        console.log("O aluno está de RECUPERAÇÃO.")
    } else {
        console.log("O aluno foi REPROVADO.")
    }
}

console.log("Pressione espaço para continuar.")
rl.keyInPause('', { limit: ' ' })

// ATIVIDADE 5

console.clear()
console.log("=== EXERCÍCIO 5 ===")

let peso = rl.questionFloat("Qual o seu peso? ")
let altura = rl.questionFloat("Qual e a sua altura? ")

let imc = peso / (altura ** 2)
let classificacao

if (imc > 30) {
    classificacao = "Acima do peso"
} else if (imc >= 25) {
    classificacao = "Sobrepreso"
} else if (imc >= 18.5) {
    classificacao = "Peso normal"
} else {
    classificacao = "Abaixo do peso"
}

console.log(`O seu IMC é: ${imc.toFixed(2)}.`)
console.log(classificacao)

console.log("Pressione espaço para continuar.")
rl.keyInPause('', { limit: ' ' })

// DESAFIO

const pedra = 0
const papel = 1
const tesoura = 2
const opcoes = ["Pedra", "Papel", "Tesoura"]

jogarNovamente = true
while (jogarNovamente) {
    console.clear()
    console.log("DESAFIO! PEDRA, PAPEL E TESOURA!")

    let computador = Math.floor(Math.random() * 3)

    let playerChoice = rl.keyInSelect(opcoes, "Selecione uma opcao: ", { cancel: false })

    console.log(computador, playerChoice)

    if (computador === tesoura && playerChoice === papel) {
        console.log("Você perdeu!")
    } else if (computador === papel && playerChoice === pedra) {
        console.log("Você perdeu!")
    } else if (computador === pedra && playerChoice === tesoura) {
        console.log("Você perdeu!") 
    } else if (computador === papel && playerChoice === tesoura) {
        console.log("Você venceu!")
    } else if (computador === pedra && playerChoice === papel) {
        console.log("Você venceu!")
    } else if (computador === tesoura && playerChoice === pedra) {
        console.log("Você venceu!")
    } else {
        console.log("Empate!")
    }

    let denovo = rl.keyInYNStrict("Quer jogar de novo? ")

    if (denovo) {
        jogarNovamente = true
    } else {
        jogarNovamente = false
    }
}
