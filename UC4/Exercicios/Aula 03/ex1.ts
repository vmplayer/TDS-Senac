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
