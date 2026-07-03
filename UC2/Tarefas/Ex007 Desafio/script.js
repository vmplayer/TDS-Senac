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
    searchRes.innerHTML = ''

    if (numeroAlunos < 1) {
        window.alert('Você deve cadastrar pelo menos um aluno.')
        location.reload()
    } else {
        for (let i = 0; i < numeroAlunos; i++) {
            container.innerHTML += `
                <p>
                    <label for="nome">Nome do aluno: </label>
                    <input type="text" class="nome"> Nº: ${i + 1}
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
        
        results.innerHTML = ''

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

            const item = nomePesquisa.value.trim().toLowerCase()

            if (item === '') return

            const resultados = nomes.filter(aluno => aluno.toLowerCase().includes(item))

            if (resultados.length > 0) {
                searchRes.innerHTML += `<p><strong>Alunos encontrados na lista: </strong></p>`

                resultados.forEach(aluno => {
                    const pos = nomes.indexOf(aluno) + 1

                    searchRes.innerHTML += `
                    <p>O(a) aluno(a) está cadastrado(a).</p>
                    <p><strong>Nome do aluno: </strong>${aluno}</p>
                    <p><strong>Posição na lista: </strong>${pos}</p>
                    `
                })
            } else {
                searchRes.innerHTML += `
                    <p>O(a) aluno(a) <strong>${nomePesquisa.value}</strong> não foi encontrado(a) na lista de alunos.</p>
                `
            }
        })
    }) 
}
