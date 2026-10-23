import { Mamifero } from "./Mamifero";

// Usando a palavra 'extends', 
// Informamos que a classe cachorro herda da classe mamífero
export class Cachorro extends Mamifero {
    raca: string;

    constructor (raca: string, nome: string, patas: number, pelo: string) {
        // Super vem de 'superclass', que é a classe pai
        // super() nada mais é do que o constructor da classe pai
        super(nome, patas, pelo);
        this.raca = raca;
    }

    correr(): void {
        console.log(`${this.getName()} está correndo com suas ${this.patas}`);
    }
}
