import { IGerente } from "./interfaces/IGerente";
import { ITrabalhador } from "./interfaces/ITrabalhador";

export class Gerente implements IGerente, ITrabalhador {
    nome: string;

    constructor (nome: string) {
        this.nome = nome;
    }

    trabalhar(): void {
        console.log(`${this.nome} precisou trabalhar hoje...`)
    }

    gerenciar(): void {
        console.log(`${this.nome} está gerenciando o projeto!`)
    }
}
