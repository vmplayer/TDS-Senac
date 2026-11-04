import { Navio } from "./Navio";

export class Chalupa extends Navio {
    constructor (nome: string, capacidadeTripulacao: number, vida: number, velocidade: number, canhoes: number) {
        super(nome, capacidadeTripulacao, vida, velocidade, canhoes, "chalupa");
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

    protected regras(): boolean | void {
        if (this.capacidadeTripulacao <= 10 && this.capacidadeTripulacao > 0) {
            if (this.velocidade >= 80) {
                if (this.vida <= 40 && this.vida > 0) {
                    if (this.canhoes <= 4 && this.canhoes > 0) {
                        return true;
                    } else {
                        console.log("Quantidade insuficiente de canhões.");
                        return false;
                    }
                } else {
                    console.log("Vida muito alta ou menor/igual a zero.");
                    return false;
                }
            } else {
                console.log("Velocidade muito baixa.");
                return false;
            }
        } else {
            console.log("O navio tem uma capacidade de tripulação insuficiente ou acima de 10 tripulantes.");
            return false;
        }
    }
}
