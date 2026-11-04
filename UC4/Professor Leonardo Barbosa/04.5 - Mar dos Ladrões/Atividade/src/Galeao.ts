import { Navio } from "./Navio";

export class Galeao extends Navio {
    constructor (nome: string, capacidadeTripulacao: number, vida: number, velocidade: number, canhoes: number) {
        super(nome, capacidadeTripulacao, vida, velocidade, canhoes, "galeao");
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

    protected regras(): boolean | void {
        if (this.capacidadeTripulacao <= 50 && this.capacidadeTripulacao > 0) {
            if (this.velocidade <= 40 && this.velocidade > 0) {
                if (this.vida >= 60) {
                    if (this.canhoes >= 6) {
                        return true;
                    } else {
                        console.log("Quantidade insuficiente de canhões.");
                        return false;
                    }
                } else {
                    console.log("Vida muito baixa.");
                    return false;
                }
            } else {
                console.log("Velocidade muito alta ou igual/menor que zero.");
                return false;
            }
        } else {
            console.log("O navio tem uma capacidade de tripulação insuficiente ou acima de 50 tripulantes.");
            return false;
        }
    }
}
