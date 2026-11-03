import { Navio } from "./Navio";

export class Galeao extends Navio {
    constructor (nome: string, capacidadeTripulacao: number, vida: number, velocidade: number, canhoes: number, tipoNavio: string) {
        super(nome, capacidadeTripulacao, vida, velocidade, canhoes, tipoNavio);
    }

    public navegar(): void {
        console.log("O Galeão avança lentamente pelo mar.")
    }

    public atacar(): void {
        console.log("O galeão dispara uma poderosa salva de canhões.")
    }

    public repararNavio(rec: number): void {
        this.vida += rec;
        this.testeVida()
    }
}
