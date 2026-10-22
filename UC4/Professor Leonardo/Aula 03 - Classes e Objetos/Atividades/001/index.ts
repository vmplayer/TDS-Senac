// Importações em TypeScript são parecidas com este comando
// Estamos dizendo:
// Importe TUDO (por isso o asterisco) com o nome de 'readline'
// (ele já cria um objeto com esse nome)
// da biblioteca 'readline-sync'
import * as readline from 'readline-sync';

let nome: string = readline.question("Qual e o seu nome? ");
let idade: number = readline.questionInt("Qual a sua idade? ");

console.log(`Olá, ${nome}. Você tem ${idade} anos!`);

// Função em TypeScript

function saudacao(meuNome: string, minhaIdade: number): void {
    console.log(`Olá, ${meuNome}. Você tem ${minhaIdade} anos!`);
}

saudacao(nome, idade);

// Esta função tem return
// Ela retorna uma string
function frase(): string {
    return 'Olá, pessoal!';
}

// Esta função também tem return
// Ela retorna um number
function somar(): number {
    return 1 + 2;
}

// Esta função NÃO TEM um return
// Ela retorna void
function saudarOPovo(): void {
    console.log("Olá galera!")
}
