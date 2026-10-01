import * as rls from 'readline-sync';

function criarLinha(linha: number): string {
    return `-=+ ATIVIDADE ${linha} +=-`;
}

// console.log(criarLinha(1))

// function dobrar(a: number): number {
//     return a * 2;
// }

// let numDobrar: number = rls.questionInt("Diga um numero: ");
// console.log(dobrar(numDobrar));

// console.log(criarLinha(2))

// function saudacao(nome: string): string {
//     return `Olá, ${nome}!`;
// }

// let nomeSaudacao: string = rls.question("Qual o seu nome? ");
// console.log(saudacao(nomeSaudacao));

// console.log(criarLinha(3))

// let nomeDeAmigos: string[] = [];

// let nomeAmigo: string = rls.question("Diga o nome de um amigo seu: ");
// nomeDeAmigos.push(nomeAmigo);
// nomeAmigo = rls.question("Diga outro amigo: ");
// nomeDeAmigos.push(nomeAmigo);
// nomeAmigo = rls.question("Diga um ultimo nome: ");
// nomeDeAmigos.push(nomeAmigo);

// nomeDeAmigos.forEach((i) => {
//     console.log(i);
// });

// console.log(criarLinha(4))

// let tuple: [string, number];

// let tuplaNome = rls.question("Qual o seu nome? ");
// let tuplaIdade = rls.questionInt("Qual a sua idade? ");

// tuple = [tuplaNome, tuplaIdade];

// console.log(tuple);

console.log(criarLinha(5));

enum AccessLvl {
    ADMIN = "ADMIN", 
    USER = "USER", 
    GUEST = "GUEST"
}

while (true) {
    console.log(`
QUAL O SEU NÍVEL DE ACESSO?
[1] - ADMIN
[2] - USUÁRIO
[3] - VISITANTE
    `);

    let userAccess: number = rls.questionInt("");
    let selectedLvl: AccessLvl | null = null;

    switch (userAccess) {
        case 1:
            selectedLvl = AccessLvl.ADMIN;
            break;

        case 2:
            selectedLvl = AccessLvl.USER;
            break;

        case 3:
            selectedLvl = AccessLvl.GUEST;
            break;
    
        default:
            console.log("Selecione uma opção válida!");
            continue;
    }

    console.log(`Nível de acesso: ${selectedLvl}`);
    break;
}

