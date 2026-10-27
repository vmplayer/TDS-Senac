import { Animal } from "./Animal";

// Subclasse Réptil
export class Reptil extends Animal {
  tipoEscama: string;

  constructor(nome: string, idade: number, tipoEscama: string) {
    super(nome, idade);
    this.tipoEscama = tipoEscama;
  }

  botarOvo(): void {
    console.log(`${this.nome} botou um ovo.`);
  }
}