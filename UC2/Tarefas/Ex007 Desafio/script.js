const startf = document.querySelector('#startf')
const inputAlunos = document.querySelector('#numeroAlunos')
const container = document.querySelector('.container')
const results = document.querySelector('.results')
const search = document.querySelector('.search')
const searchRes = document.querySelector('.searchRes')

let nomes = []

startf.addEventListener('click', () => {
    const numeroAlunos = Number(inputAlunos.value)

    container.innerHTML = ''
    results.innerHTML = ''
    search.innerHTML = ''

    if (numeroAlunos < 1) {
        window.alert('O valor não pode ser menor que 1.')
    } else {
        for (let i = 0; i < numeroAlunos; i++) {
            container.innerHTML += `
                <p>
                    <label for="nome">Nome do aluno: </label>
                    <input type="text" class="nome">
                </p>
            `
        }
        
        container.innerHTML += `<button id="cadastrar">Cadastrar alunos</button>`

        cadastrar()
    }
})

function cadastrar() {
    const cadastro = document.querySelector('#cadastrar')

    cadastro.addEventListener('click', () => {
        const todosNomes = document.querySelectorAll('.nome')
        
        nomes = []

        todosNomes.forEach(input => {
            if (input.value.trim() !== '') { 
                nomes.push(input.value.trim())
            }
        })

        for (let i = 0; i < nomes.length; i++) {
            results.innerHTML += `
                <p>${i + 1} - ${nomes[i]}</p>
            `
        }

        results.innerHTML += `
            <br>
            <p>Total de alunos cadastrados: ${nomes.length}</p>
        `

        search.innerHTML = `
            <p>
                <label for="procurar">Pesquisar um aluno:</label>
                <input type="text" id="procurar" required>
                <button id="pesquisarf">Pesquisar</button>
            </p>
        `

        const pesquisarf = document.querySelector('#pesquisarf')
        const nomePesquisa = document.querySelector('#procurar')

        pesquisarf.addEventListener('click', () => {
            searchRes.innerHTML = ''

            const item = nomePesquisa.value.trim()

            if (nomes.includes(item)) {
                searchRes.innerHTML += `
                    <p>O(a) aluno(a) ${item} foi encontrado(a) no cadastro.</p>
                `
            } else {
                searchRes.innerHTML += `
                    <p>O(a) aluno(a) <strong>${item}</strong> não foi encontrado(a) na lista de alunos.</p>
                `
            }
        })
    }) 
}
