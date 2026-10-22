import { Personagem } from "./Personagem"


export class Cachorro {
    private nome: string;
    private vida: number;
    private dono?: Personagem;

    constructor (nome: string, vida: number, dono?: Personagem) {
        this.nome = nome;
        this.vida = vida;
        this.dono = dono;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(novoNome: string): void {
        this.nome = novoNome;
    }

    public getVida(): number {
        return this.vida;
    }

    public setVida(novaVida: number): void {
        this.vida = novaVida;
    }

    public getDono(): Personagem | undefined {
        return this.dono;
    }

    public setDono(novoDono: Personagem): void {
        this.dono = novoDono;
    }
}
