const rl = require('readline-sync')

console.clear()
console.log("=== EXERCÍCIO 1 ===\n")

console.log("[1] Hambúrguer")
console.log("[2] Pizza")
console.log("[3] Cachorro-quente")
console.log("[4] Refrigerante")
console.log("[5] Sorvete")

let opcaoMenu = rl.questionInt("Escolha uma opcao: ")

switch (opcaoMenu) {
    case 1:
        console.log("Você escolheu: Hambúrguer!")
        break
    
    case 2:
        console.log("Você escolheu: Pizza!")
        break

    case 3:
        console.log("Você escolheu: Cachorro-quente!")
        break

    case 4:
        console.log("Você escolheu: Refrigerante!")
        break

    case 5:
        console.log("Você escolheu: Sorvete!")
        break

    default:
        console.log("Opção inválida.")
}

console.log("\n===EXERCÍCIO 2 ===\n")

let mes = rl.questionInt("Diga um numero entre 1 e 12: ")

switch (mes) {
    case 1:
        console.log("Mês: Janeiro")
        break

    case 2:
        console.log("Mês: Fevereiro")
        break

    case 3:
        console.log("Mês: Março")
        break

    case 4:
        console.log("Mês: Abril")
        break

    case 5:
        console.log("Mês: Maio")
        break

    case 6:
        console.log("Mês: Junho")
        break

    case 7:
        console.log("Mês: Julho")
        break

    case 8:
        console.log("Mês: Agosto")
        break

    case 9:
        console.log("Mês: Setembro")
        break

    case 10:
        console.log("Mês: Outubro")
        break

    case 11:
        console.log("Mês: Novembro")
        break

    case 12:
        console.log("Mês: Dezembro")
        break

    default:
        console.log(`O mês ${mes} não existe.`)
}

console.log("\n=== EXERCÍCIO 3\n")

let n1 = rl.questionInt("Diga o primeiro valor: ")
let n2 = rl.questionInt("Diga o segundo valor: ")
let total

let operacao = rl.question("Diga um operador matematico: [+] [-] [x] [/] \n")

switch (operacao) {
    case "+":
        total = n1 + n2
        break
    
    case "-":
        total = n1 - n2
        break

    case "x":
        total = n1 * n2
        break

    case "/":
        if (n2 === 0) {
            total = "O número não pode ser dividido por 0."
        } else {
            total = n1 / n2
        }
        break

    default:
        console.log("Opção inválida.")
}

console.log(total)

console.log("\n=== EXERCÍCIO 4 ===\n")

console.log("[1] JavaScript")
console.log("[2] Python")
console.log("[3] Java")
console.log("[4] PHP")

let opcaoLingua = rl.questionInt("Escolha uma linguagem: ")

switch (opcaoLingua) {
    case 1:
        console.log("Front-end e Back-end")
        break
    
    case 2:
        console.log("Dados e IA")
        break

    case 3:
        console.log("Desktop e back-end")
        break

    case 4:
        console.log("Desenvolvimento Web")
        break

    default:
        console.log("Esta não é uma opção.")
}

// console.log("\n=== DESAFIO ===\n")

// console.log("[1] Quadrado")
// console.log("[2] Retângulo")
// console.log("[3] Triângulo")
// console.log("[4] Círculo")

// let forma = rl.questionInt("Qual forma voce deseja calcular? ")
// let ladoUm
// let ladoDois
// let ladoTres
// let pi = 3.14
// let raio
// let resultado


// switch (forma) {
//     case 1:
//         ladoUm = rl.questionInt("Informe a medida: ")
//         resultado = ladoUm ** 2
//         break

//     case 2:
//         ladoUm = rl.questionInt("Informe a largura: ")
//         ladoDois = rl.questionInt("Informe a altura: ")
//         resultado = ladoUm * ladoDois
//         break
// }

// console.log(resultado)
