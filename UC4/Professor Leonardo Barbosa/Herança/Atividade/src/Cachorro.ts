import { Mamifero } from "./Mamifero";

export class Cachorro extends Mamifero {
    constructor (nome: string, idade: number, temPelos: boolean) {
        super(nome, idade, temPelos);
    }

    latir(): void {
        console.log(`${this.nome} está latindo!`);
    }
}