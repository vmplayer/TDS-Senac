import { Navio } from "./Navio";

export class Bergantim extends Navio {
    constructor (nome: string, capacidadeTripulacao: number, vida: number, velocidade: number, canhoes: number) {
        super(nome, capacidadeTripulacao, vida, velocidade, canhoes, "bergantim");
    }

    public navegar(): void {
        console.log(`O Bergantim está aproveitando seus ventos favoráveis para navegar rapidamente!`)
    }

    public atacar(): void {
        console.log("O Bergantim realiza uma sequência rápida de disparos.")
    }

    protected regras(): boolean | void {
        if (this.capacidadeTripulacao <= 20 && this.capacidadeTripulacao > 0) {
            if (this.velocidade >= 50) {
                if (this.vida >= 40 && this.vida < 80) {
                    if (this.canhoes >= 4 && this.canhoes <= 6) {
                        return true;
                    } else {
                        console.log("Quantidade insuficiente de canhões ou excessiva.");
                        return false;
                    }
                } else {
                    console.log("Vida muito baixa ou excessiva.");
                    return false;
                }
            } else {
                console.log("Velocidade muito baixa.");
                return false;
            }
        } else {
            console.log("O navio tem uma capacidade de tripulação insuficiente ou acima de 20 tripulantes.");
            return false;
        }
    }
}
