const rl = require('readline-sync')

let opcao

while (opcao != 0) {
    console.log(`
        --- MENU ---
        [1] Olá
        [2] Tchau!
        [3] Rodorlfo
        [0] Sair        
    `)


    opcao = rl.questionInt('Escolha sua opcao: ')

    switch (opcao) {
        case 1:
            console.log('Olá!')
            break

        case 2:
            console.log('Tchau!')
            break

        case 3: 
            console.log('Rodorlfo.')
            break

        case 0:
            console.log('Saindo...')
            break

        default:
            console.log('Opção inválida. Tente novamente!')

    }
}
