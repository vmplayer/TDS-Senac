import { Personagem } from "./Personagem";

export class Arqueiro extends Personagem {
    precisao: number;

    constructor (nome: string, hp: number, atk: number, def: number, precisao: number) {
        super(nome, hp, atk, def);
        this.precisao = precisao + 2; // Propriedade exclusiva da classe Arqueiro: Precisão Extra;
    }
}
