const rls = require('readline-sync');

function mostrarDivisao(ex) {
    return `\n-=== EXERCÍCIO ${ex} ===-`;
}

console.log(mostrarDivisao(1));

let nome01 = rls.question("Qual o seu nome? ");
let idade01 = rls.questionInt("Qual a sua idade? ");
console.log(`Olá, ${nome01}, você tem ${idade01} anos de idade. Legal, não?`);

console.log(mostrarDivisao(2));

let num021 = rls.questionInt("Diga um valor: ");
let num022 = rls.questionInt("Diga outro valor: ");

console.log(`Soma: ${num021 + num022}`);
console.log(`Subtração: ${num021 - num022}`);
console.log(`Multiplicação: ${num021 * num022}`);
console.log(`Divisão: ${num021 / num022}`);

console.log(mostrarDivisao(3));

let nota03 = rls.questionInt("Diga a sua nota: ");
if (nota03 >= 6) {
    console.log("Aprovado!");
} else {
    console.log("Reprovado!");
}

console.log(mostrarDivisao(4));

let numero04 = rls.questionInt("Diga um numero: ");
if (numero04 % 2 === 0) {
    console.log("Seu número é PAR!");
} else {
    console.log("Seu número é ÍMPAR!");
}

console.log(mostrarDivisao(5));

let diaSemana = rls.questionInt("Diga um dia da semana [1-7]: ");
switch (diaSemana) {
    case 1: 
        console.log("Domingo");
        break;

    case 2:
        console.log("Segunda-feira");
        break;

    case 3:
        console.log("Terça-feira");
        break;

    case 4:
        console.log("Quarta-feira");
        break;

    case 5:
        console.log("Quinta-feira");
        break;

    case 6:
        console.log("Sexta-feira");
        break;

    case 7:
        console.log("Sábado");
        break;

    default:
        console.log("Dia inválido");
        break;
}

console.log(mostrarDivisao(6));

console.log(`
    [1] - Cachorro-Quente
    [2] - Gato-Quente
    [3] - Arara-Quente
    [4] - Tamanduá-Quente
`);

let res06 = rls.questionInt("Escolha uma opção: ");
switch (res06) {
    case 1:
        console.log("Cachorro-Quente");
        console.log("Valor: R$ 14.00");
        break;

    case 2:
        console.log("Gato-Quente");
        console.log("Valor: R$ 18.75");
        break;

    case 3:
        console.log("Arara-Quente");
        console.log("Valor: R$ 10.00");
        break;

    case 4:
        console.log("Tamanduá-Quente");
        console.log("Valor: R$ 9.99");
        break;  

    default:
        console.log("Opção não encontrada.");
}

mostrarDivisao(7);

let num07 = [1, 2, 3, 4, 5];
let sum07 = 0;

for (let i = 0; i < num07.length; i++) {
    sum07 += num07[i];
}

console.log(sum07);

mostrarDivisao(8);

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

mostrarDivisao(9);

frutas09 = ["Maçã", "Banana", "Morango", "Pera", "Kiwi", "Laranja"];

for (let fruta of frutas09) {
    console.log(fruta);
}

mostrarDivisao(10);

cores10 = ["Amarelo", "Verde", "Marrom", "Vermelho", "Dourado", "Roxo", "Púrpura", "Azul"];

cores10.forEach(cor => {
    console.log(cor);
});

mostrarDivisao(11);

const pessoa11 = {
    nome: "Josemar",
    idade: 84
};

for (let propriedade in pessoa11) {
    console.log(pessoa11[propriedade]);
}

mostrarDivisao(12);

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) console.log(i);
}

mostrarDivisao(13);

function calcMaior(num131, num132) {
    if (num131 > num132) {
        return num131;
    } else if (num131 === num132) {
        return "Os números são iguais!"
    } else {
        return num132;
    }
}

let num1301 = rls.questionInt("Diga um numero: ");
let num1302 = rls.questionInt("Diga outro numero: ");

console.log("O maior número é: " + calcMaior(num1301, num1302));

mostrarDivisao(14);

let numeros14 = [3, 5, 2, 39]; // 49

let soma = (arr) => {
    let total = 0;
    for (numero in arr) {
        total += arr[numero];
    }

    return total;
}

console.log(soma(numeros14));

mostrarDivisao(15);

function saudar(nome151, idade151) {
    return `Olá, ${nome151}! Você tem atualmente ${idade151} anos de idade.`;
}

const nome1501 = rls.question("Qual o seu nome? ");
const idade1501 = rls.questionInt("Qual a sua idade? ");

console.log(saudar(nome1501, idade1501));
