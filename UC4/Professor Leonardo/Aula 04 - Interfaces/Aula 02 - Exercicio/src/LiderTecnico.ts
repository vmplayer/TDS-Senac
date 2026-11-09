import { ITrabalhador } from "./interfaces/ITrabalhador";

export class LiderTecnico implements ITrabalhador {
    nome: string;

    constructor (nome: string) {
        this.nome = nome;
    }

    trabalhar(): void {
        console.log(`${this.nome} está liderando!`)
    }
}