import { Navio } from "./Navio";

export class Bergantim extends Navio {
    constructor (nome: string, capacidadeTripulacao: number, vida: number, velocidade: number, canhoes: number, tipoNavio: string) {
        super(nome, capacidadeTripulacao, vida, velocidade, canhoes, tipoNavio);
    }

    public navegar(): void {
        console.log(`O Bergantim está aproveitando seus ventos favoráveis para navegar rapidamente!}`)
    }

    public atacar(): void {
        console.log("O Bergantim realiza uma sequência rápida de disparos.")
    }
}
