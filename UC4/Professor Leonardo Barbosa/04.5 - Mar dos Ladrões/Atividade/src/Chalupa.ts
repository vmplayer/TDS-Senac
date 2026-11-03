import { Navio } from "./Navio";

export class Chalupa extends Navio {
    constructor (nome: string, capacidadeTripulacao: number, vida: number, velocidade: number, canhoes: number, tipoNavio: string) {
        super(nome, capacidadeTripulacao, vida, velocidade, canhoes, tipoNavio);
    }

    public navegar(): void {
        console.log("A Chalupa utiliza a sua velocidade para realizar manobras rápidas!")
    }

    public atacar(): void {
        console.log("A Chalupa dispara seus poucos canhões e tenta escapar rapidamente.")
    }

    public explorarIlha(): void {
        console.log("A tripulação está explorando a ilha em busca de tesouros.")
    }
}
