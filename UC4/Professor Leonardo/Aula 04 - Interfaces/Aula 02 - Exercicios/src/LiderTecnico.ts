import { IGerente } from "./interfaces/IGerente";
import { IProgramador } from "./interfaces/IProgramador";
import { ITrabalhador } from "./interfaces/ITrabalhador";

export class LiderTecnico implements ITrabalhador, IGerente, IProgramador {
    nome: string;

    constructor (nome: string) {
        this.nome = nome;
    }

    trabalhar(): void {
        console.log(`${this.nome} está liderando!`);
    }

    programar(): void {
        console.log(`${this.nome} assumiu o controle da programação.`);
    }

    gerenciar(): void {
        console.log(`${this.nome} precisou substituir o gerente hoje.`)
    }
}