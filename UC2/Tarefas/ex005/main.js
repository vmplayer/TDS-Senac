const rl = require('readline-sync')

console.log('=== EXERCÍCIO 6 ===\n')

let nota = rl.questionFloat('Diga a nota do aluno: ')
let conceito

if (nota >= 9) {
    conceito = "A"
} else if (nota >= 7) {
    conceito = "B"
} else if (nota >= 5) {
    conceito = "C"
} else {
    conceito = "D"
}

console.log(`Conceito ${conceito}.`)

console.log('\n=== EXERCÍCIO 7 ===  \n')

let numero = rl.questionInt('Digite um numero: ')
let pnz // Positivo, Neutro ou Zero
let poi // Par Ou Impar

if (numero > 0) {
    pnz = "positivo"
} else if (numero < 0) {
    pnz = "negativo"
} else {
    pnz = "zero"
}

if (numero % 2 === 0) {
    poi = "par"
} else {
    poi = "ímpar"
}

console.log(`O seu número é ${pnz} e ${poi}.`)

console.log('\n=== EXERCÍCIO 8\n')

let valorUm = rl.question('Diga um numero: ')
let valorDois = rl.question('Diga outro numero: ')
let valorTres = rl.question('Diga um ultimo numero: ')
let maior = Math.max(valorUm, valorDois, valorTres)

console.log(`Maior número: ${maior}.`)

console.log('\n=== EXERCÍCIO 9 ===\n')

let ano = rl.questionInt("Informe o ano: ")

if (ano % 4 === 0) {
    console.log("Ano bissexto.")
} else {
    console.log("Ano não bissexto.")
}

console.log('\n=== EXERCÍCIO 10 ===\n')

let salario = rl.questionFloat("Qual o salario do funcionario? ")
let percentual, valorLiquido, valorImposto

if (salario <= 2000) {
    percentual = 0
} else if (salario <= 4000) {
    percentual = 7.5
} else if (salario <= 6000) {
    percentual = 15
} else {
    percentual = 22
}

valorImposto = (salario * percentual) / 100
valorLiquido = salario - valorImposto


console.log(`Salário: R\$${salario.toFixed(2)}.`)
console.log(`Percentual aplicado: ${percentual}%.`)
console.log(`Valor do imposto: R\$${valorImposto.toFixed(2)}.`)
console.log(`\nTotal líquido: R\$${valorLiquido.toFixed(2)}.\n`)

console.log('\n=== EXERCÍCIO 11 ===\n')

let idade = rl.questionInt("Qual a sua idade? ")
let vota

if (idade < 16) {
    vota = "Não vota"
} else if (idade < 18) {
    vota = "Voto facultativo"
} else if (idade <= 69) {
    vota = "Voto obrigatório"
} else {
    vota = "Voto facultativo" 
}

console.log(vota + ".")

console.log('\n=== EXERCÍCIO 12 ===\n')

let userC = "UsuarioLegal"
let passwC = "ReceitaDoHamburguerDeSiri123DoomSlayer1994SonicSilverShadow4ever"

let user = rl.question("Usuario: ")
let passw = rl.question("Senha: ")

if (user === userC && passw === passwC) {
    console.log(`Seja bem-vindo, ${userC}!`)

    const opcoes = ["Usuario Comum", "Moderador", "Admin"]
    let acesso = rl.keyInSelect(opcoes, "Qual nível de acesso você deseja? ", { cancel: false })
    let accLVL

    if (acesso === 0) {
        accLVL = "Comum"
    } else if (acesso === 1) {
        accLVL = "Moderador"
    } else {
        accLVL = "Administrador"
    }

    console.log(`Nível de acesso selecionado: Acesso ${accLVL}.`)
} else {
    console.log("Usuário ou senha inválidos.")
}

console.log('\n=== EXERCÍCIO 13 ===\n')

const opcoes = ["Sul", "Sudeste", "Centro-Oeste", "Nordeste", "Norte"]
let valorCompra = rl.questionInt('Qual o valor da sua compra? ')
let regiao
let area
let frete

if (valorCompra > 200) {
    frete = 0
} else {
    regiao = rl.keyInSelect(opcoes, "Qual a sua regiao? ", { cancel: false })

    if (regiao === 0) {
        frete = 20
        area = "Sul"
    } else if (regiao === 1) {
        frete = 25
        area = "Sudeste"
    } else if (regiao === 2) {
        frete = 30
        area = "Centro-Oeste"
    } else if (regiao === 3) {
        frete = 35
        area = "Nordeste"
    } else {
        frete = 40
        area = "Norte"
    }
}

console.log(`O valor da compra é: R\$${valorCompra}.`)
if (regiao !== undefined) console.log(`A região da entrega é: ${area}.`)
console.log(`Valor do frete: R\$${frete}.`)

console.log('\n=== EXERCÍCIO 14 ===\n')

let valor = rl.question("Qual o valor da sua compra? ")
let vip = rl.keyInYNStrict("Voce e VIP? ")

let cliente
let percentualCompra
let valorFinal

if (vip) {
    cliente = "VIP"

    if (valor <= 100) {
        percentualCompra = 5
    } else if (valor <= 300) {
        percentualCompra = 10
    } else {
        percentualCompra = 15
    }
} else {
    cliente = "COMUM"

    if (valor <= 100) {
        percentualCompra = 0
    } else if (valor <= 300) {
        percentualCompra = 5
    } else {
        percentualCompra = 10
    }
}

valorFinal = valor - ((valor * percentualCompra) / 100)

console.log(`\nTipo de cliente: ${cliente}.`)
console.log(`Percentual aplicado: ${percentualCompra}%.`)
console.log(`Valor final: R\$${valorFinal}.`)

console.log('=== EXERCÍCIO 15 ===')

let nomeAluno = rl.question('Qual o nome do aluno? ')
let percentualFreq = rl.questionInt('Qual a frequencia do aluno? ')

if (percentualFreq >= 75) {
    let entregouTrabalho = rl.keyInYNStrict('Entregou o trabalho final? ')
    if (entregouTrabalho) {
        console.log("Pode fazer a prova.")
    } else {
        console.log("Não pode fazer a prova, trabalho pendente.")
    }
} else {
    console.log(`${nomeAluno} impedido de fazer a prova final por falta.`)
}
