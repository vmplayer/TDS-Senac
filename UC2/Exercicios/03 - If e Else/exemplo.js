let idade = 3

// Operador de maior que [>]
console.log(idade > 15) // True

// Operador de menor que [<]
console.log(idade < 20) // True

// Operador de maior ou igual [>=]
console.log(idade >= 18) // True

// Operador de menor ou igual [<=]
console.log(idade <= 18) // True

// Operador de igual [==]
console.log(idade == 20) // False

// Operador de diferente [!=]
console.log(idade != 20) // True

if (idade >= 60) {
    console.log("Você é idoso.")
} else if (idade >= 21) {
    console.log("Você é um adulto.")
} else if (idade >= 13) {
    console.log("Você é adolescente.")
} else {
    console.log("Você é uma criança.")
}
