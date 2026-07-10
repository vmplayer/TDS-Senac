let pessoa = {
    nome: "Jennnifer",
    idade: 28,
    profissao: "Advogada",
    hobby: "Tocar guitarra"
}

console.log(pessoa)

pessoa.nome = "Noberto"
pessoa.idade = 35
pessoa["profissao"] = "Cuspir fogo"
pessoa.hobby = "Queimar gente"

pessoa.cidade = "Hell's Kitchen"
console.log(pessoa)

delete pessoa.profissao
console.log(pessoa)

console.clear()

let alunos = [
    {
        nome: 'Daniel',
        nota: 9.9
    },
    {
        nome: 'Rodorlfo',
        nota: 10
    },
    {
        nome: 'Mestre Yoda',
        nota: 8
    },
    {
        nome: 'Caesar Zeppeli',
        nota: 9
    }
]

for (let aluno of alunos) {
    console.log(`Nome: ${aluno.nome}`)
    console.log(`Nota: ${aluno.nota}\n`)
}

function exibirDados() {
    console.log(pessoa)
}

exibirDados()

// Somar 2 números
function soma(n1, n2) {
    console.log(`A soma dos dois números é: ${n1 + n2}`)
}

soma(5, 10)
