import { IProgramador } from "./interfaces/IProgramador";
import { ITrabalhador } from "./interfaces/ITrabalhador";

export class Programador implements IProgramador, ITrabalhador {
    nome: string;

    constructor (nome: string) {
        this.nome = nome;
    }

    trabalhar(): void {
        console.log(`${this.nome} está trabalhando novamente...`)
    }

    programar(): void {
        console.log(`${this.nome} está programando!`)
    }
}