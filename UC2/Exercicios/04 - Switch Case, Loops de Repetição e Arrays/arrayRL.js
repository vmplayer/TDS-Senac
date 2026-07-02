const rl = require('readline-sync')

let nomes = []

// Registrar 5 nomes

for (let i = 0; i < 5; i++) {
    nomes.push(rl.question('Digite o nome do usuario: '))
}

for (let i = 0; i < 5; i++) {
    console.log(`Bem-vindo, ${nomes[i]}!`)
}
