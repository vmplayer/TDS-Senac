import type { IAtacante } from "./IAtacante";

// Eu estou dizendo que qualquer guerreiro deve seguir as regras que a Interface IAtacante manda.
export class Guerreiro implements IAtacante {
    public nome: string;

    constructor (nome: string) {
        this.nome = nome;
    }

    usarEscudo(): string {
        return `${this.nome} usou escudo para se defender!`
    }

    atacar(): void {
        console.log(`${this.nome} ataca com a espada!`);
    }
}
