// Classe base (superclasse)
export class Animal {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  mover(): void {
    console.log(`${this.nome} está se movendo...`);
  }

  comer(): void {
    console.log(`${this.nome} está comendo.`)
  }
}