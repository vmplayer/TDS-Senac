import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {
    constructor (velocidade: number) {
        super(velocidade);
    }
    
    acelerar(): void {
        this.velocidade += 10;
    }

    exibirVelocidade(): void {
        console.log(`Velocidade: ${this.velocidade}`)
    }
}
