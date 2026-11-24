import { Personagem } from "./Personagem";

export class Guardiao extends Personagem {
    private cura: number;

    constructor (nome: string, hp: number, atk: number, def: number, cura: number) {
        super(nome, hp, atk, def)
        
        this.cura = cura
    }
}
