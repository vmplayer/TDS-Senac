let rl = require('readline-sync'), MAX = 100, MIN = 0, value = 30, key

console.log('\n\n' + (new Array(20)).join(' ') + '[Z] <--> [X]   SELECIONAR: [ESPAÇO]\n')

while (true) {
    console.log('\x1B[1A\x1B[K|' + 
    (new Array(value + 1)).join('=') + '|' + 
    (new Array(MAX - value + 1)).join('-') + '| ' + value )

    key = rl.keyIn('',
        { hideEchoBack: true, mask: '', limit: 'ad ' })
    if (key === 'a') {
        if (value > MIN) value--
    } else if (key === 'd') {
        if (value < MAX) value++
    } else break
}

console.log(`O valor que o usuário escolheu: ${value}`)
