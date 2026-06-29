const rl = require('readline-sync')

console.log("\n=== DESAFIO ===\n")

console.log("[1] Quadrado")
console.log("[2] Retângulo")
console.log("[3] Triângulo")
console.log("[4] Círculo")

let forma = rl.questionInt("Qual forma voce deseja calcular? ")
let ladoUm
let ladoDois
let raio
let resultado
let caseAtiva = true


switch (forma) {
    case 1:
        ladoUm = rl.questionFloat("Informe a medida: ")
        resultado = ladoUm ** 2
        break

    case 2:
        ladoUm = rl.questionFloat("Informe a largura: ")
        ladoDois = rl.questionFloat("Informe a altura: ")
        resultado = ladoUm * ladoDois
        break
    
    case 3:
        ladoUm = rl.questionFloat("Informe a largura: ")
        ladoDois = rl.questionFloat("Informe a altura: ")
        resultado = (ladoUm * ladoDois) / 2
        break

    case 4:
        raio = rl.questionFloat("Informe o raio do círculo: ")
        resultado = Math.PI * (raio ** 2)
        break

    default:
        console.log("Opção inválida.")
        caseAtiva = false
}

if (caseAtiva) console.log(resultado.toFixed(2))

