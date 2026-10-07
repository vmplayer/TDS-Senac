let nome: string = "valval";
// let minhaIdade: number = 31;
// let desligado: boolean = true;

// function somar(a: number, b: number):number {
//     return a + b;
// }

// console.log(somar(10,90));

// // Arrays em TypeScript
// let compras: string[] = ["Pão", "Leite", "Manteiga"];

// let numeros: Array<number> = [1, 2, 3]

// Crie um Array que contém X notas
// Depois, calcule a média destas notas e mostre no terminal

// Lembrando: a média se calcula somando todos os numeros e dividindo
// o resultado pela quantidade de números.

// Dica: para somar o array, use um for.

// let notas: number[] = [2, 6, 3, 5, 4];

// let media:number = 0;
// for (let i: number = 0; i < notas.length; i++) {
//     media += notas[i];
// }

// media = media / notas.length;
// console.log(media); // Retorna 4

// // Objetos em TypeScript
// let person: {nome: string, idade: number, peso?: number} = {
//     nome: nome,
//     idade: 31
// }

// console.log(person.nome);
// person.peso = 70;

// Crie dois objetos representando pessoas (coloque nomes diferentes para os objetos)
// Estes objetos devem ter: nome (string), cidade (string), emprego (boolean)
// Sendo que emprego deve ser um atributo opcional.
// Depois, faça um if que mostre duas frases diferentes
// Se a pessoa tem um emprego, mostra "Fulano de cidade tal está trabalhando."
// Se não, mostra "Fulano de tal cidade está desempregado."

let pessoas: {nome: string, cidade: string, emprego?: boolean}[] = [
    {
        nome: "Franklin",
        cidade: "Los Santos"
    },
    {
        nome: "Trevor",
        cidade: "Los Santos",
        emprego: true // Fazendo metanfetaminaKKKKKKKK
    }
];

console.log(pessoas);

// FALTA O IF
