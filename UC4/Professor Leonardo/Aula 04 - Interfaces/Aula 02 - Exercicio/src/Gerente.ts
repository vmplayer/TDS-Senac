import { IGerente } from "./interfaces/IGerente";

export class Gerente implements IGerente {
    nome: string;

    constructor (nome: string) {
        this.nome = nome;
    }

    gerenciar(): void {
        console.log(`${this.nome} está gerenciando as coisas...`)
    }
}
