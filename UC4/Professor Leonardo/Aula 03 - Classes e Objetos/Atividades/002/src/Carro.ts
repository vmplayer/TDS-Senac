/*
    Crie a classe Carro
    Siga as instruções para criá-la usando de exemplo a classe Cachorro.

    O carro deve ter:
    Marca, tipo, ano

    O que o carro faz:
    - Ele anda
    - Ele buzina

    Depois de criar a classe, crie 3 carros diferentes no 'index.ts', chame seus atributos em console.log e chame seus métodos.
*/

export class Carro {
    marca: string;
    tipo: string;
    ano: number;

    constructor(marcaCr: string, tipoCr: string, anoCr: number) {
        this.marca = marcaCr;
        this.tipo = tipoCr;
        this.ano = anoCr;
    }

    andar() {
        console.log('VRUUMMMMMMMM');
    }

    buzinar() {
        console.log('BIII BIIIII');
    }
}