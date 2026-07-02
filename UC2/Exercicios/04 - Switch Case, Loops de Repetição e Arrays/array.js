let nomes = [
    "Daniel", "Maria", "João",
    "Rodorlfo", "Noberto", "Neymanco",
    "Ancara Massi", "Mister chiclet",
    "Lucimara", "Rosemara", "Maiara", 
    "Não-Me-Toque", "Caetano", "Veloso",
    "Bósnia", "Herzegovina"
]

for (let i = 0; i < nomes.length; i++) {
    console.log(`
        Bem vindo, ${nomes[i]}!
        Você é o número ${i + 1} da lista.
    `)
}

// Réplica da estrutura do loop FOR com o loop WHILE

let i = 0

while (i < nomes.length) {
    i++
    console.log(`
        Bem vindo, ${nomes[i]}!
        Você é o número ${i + 1} da lista.
    `)
}
