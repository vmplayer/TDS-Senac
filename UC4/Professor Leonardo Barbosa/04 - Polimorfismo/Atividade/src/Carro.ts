import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {
    public mover(): void {
        console.log("O carro está se movendo...");
    }
}