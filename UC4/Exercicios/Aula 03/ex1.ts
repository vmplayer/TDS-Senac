/*
    Primeiro, crie o package.json (npm init -y)
    Depois, crie o script do npm start
    
    "start": "npx tsc index.ts && node index.js"
    
    Aí, instale a biblioteca com readline-sync e também os tipos
    
    npm i readline-sync
    npm i @types/readline-sync

    Verifique se os dois aparecem no package.json. Se não aparecem, não foram instalados.
*/

/*
    EXERCÍCIO 1

    Crie uma função chamada 'somar', que pede dois números. Estes números devem ser passados pelo usuário através do readline-sync.
    Mostre a soma destes dois números. Não esqueça de tipar o retorno corretamente.
*/

import * as rls from 'readline-sync';

let num1: number = rls.questionInt("Diga um valor: ");
let num2: number = rls.questionInt("Diga um valor: ");

function somar(n1: number, n2: number): number {
    return n1 + n2;
}

console.log("O seu valor é: " + somar(num1, num2) + ".");

/*
    EXERCÍCIO 2

    Seu Zé (sim, ele de novo) também está no ramo do Jogo do Bicho no mercadinho dele. Ele precisa agora de um sistema que identifique os animais a partir dos números que os clientes escolhem. Para isso, você deve:
    - Solicitar o nome do cliente;
    - Solicitar um número de 1 a 20;
    - Criar uma função chamada 'descobrirBicho' que recebe esse número;
    - Utilizando if, else if e else, essa função identifica qual animal a pessoa escolheu.
    - A função retorna o nome do cliente, o número escolhido e o nome do animal escolhido, tudo em uma frase só!

    Animais: 
    Avestruz: 01 a 04 | Águia: 05 a 08 | Burro: 09 a 12 | Borboleta: 13 a 16 | Cachorro: 17 a 20
*/

let clienteNome: string = rls.question("Qual o seu nome? ");
let numeroAposta: number = rls.questionInt("Escolha um numero de 01 a 20: ", {max: 20});

function descobrirBicho(nomeDoCliente: string, numeroDaAposta: number) {
    let animal;

    if (numeroDaAposta <= 4) {
        animal = "Avestruz";
    } else if (numeroDaAposta <= 8) {
        animal = "Águia";
    } else if (numeroDaAposta <= 12) {
        animal = "Burro";
    } else if (numeroDaAposta <= 16) {
        animal = "Borboleta";
    } else {
        animal = "Cachorro"
    }

    return `Escolha de ${nomeDoCliente}: ${animal} [${numeroDaAposta}]!`;
}

console.log(descobrirBicho(clienteNome, numeroAposta));
