export class Personagem {
    protected nome: string;
    protected vida: number = 100;

    constructor (nome: string, vida: number) {
        this.nome = nome;
        this.vida = vida;
    }

    curar(): void {
        this.vida += 10;
        
        if (this.vida > 100) this.vida = 100;
    }

    mostrarDados(): string {
        return(`NOME: ${this.nome}\nVIDA: ${this.vida}`);
    }
}