import { IProgramador } from "./interfaces/IProgramador";

export class Programador implements IProgramador {
    nome: string;

    constructor (nome: string) {
        this.nome = nome;
    }

    programar(): void {
        console.log(`${this.nome} está programando!`)
    }
}