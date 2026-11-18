import { Personagem } from "./Personagem";

export class Guerreiro extends Personagem {
    constructor (nome: string, hp: number, atk: number, def: number) {
        atk += 2 // Propriedade exclusiva do Guerreiro: Força Extra
        super(nome, hp, atk, def);
    }
}
