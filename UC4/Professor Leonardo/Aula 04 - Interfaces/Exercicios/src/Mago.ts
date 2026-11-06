import type { IAtacante } from "./IAtacante";
import { ICura } from "./ICura";

export class Mago implements IAtacante, ICura {
    public nome: string;

    constructor (nome: string) {
        this.nome = nome;
    }

    lancarMagia(): void {
        console.log(`${this.nome} lança uma bola de fogo!`);
    }

    atacar(): void {
        console.log(`${this.nome} lança uma bola de fogo!`);
    }

    curar(valorCura: number): void {
        console.log(`${this.nome} cura ${valorCura} pontos de vida.`)
    }
}
