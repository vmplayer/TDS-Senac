import { Animal } from "./Animal";

// Subclasse Mamífero
export class Mamifero extends Animal {
  temPelos: boolean;

  constructor(nome: string, idade: number, temPelos: boolean) {
    super(nome, idade); // chama o construtor da classe pai
    this.temPelos = temPelos;
  }

  amamentar(): void {
    console.log(`${this.nome} está amamentando seus filhotes.`);
  }
}