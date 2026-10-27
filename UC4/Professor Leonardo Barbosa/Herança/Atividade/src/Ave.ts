import { Animal } from "./Animal";

export class Ave extends Animal {
    constructor (nome: string, idade: number) {
        super(nome, idade);
    }

    voar(): void {
        console.log(`${this.nome} está voando!`);
    }
}