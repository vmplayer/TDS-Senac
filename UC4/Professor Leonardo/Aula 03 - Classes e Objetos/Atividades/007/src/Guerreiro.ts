import { Personagem } from "./Personagem";

export class Guerreiro extends Personagem {
    armadura: string;

    constructor (armadura: string, nome: string, vida: number) {
        super(nome, vida);
        this.armadura = armadura;
    }

    usarEscudo(): string {
        return `${this.nome} usou escudo para se defender!`
    }
}