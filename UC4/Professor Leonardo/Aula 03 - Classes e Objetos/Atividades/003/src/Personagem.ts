export class Personagem {
    // Atributos
    nome: string;
    vida: number;
    forca: number;

    constructor (nome: string, forca: number) {
        this.nome = nome;
        this.forca = forca;
        this.vida = 50;
    }

    curar(): void {
        this.vida += 10
        if (this.vida > 100) this.vida = 100;
    } 

    dano(): void {
        this.vida -= 10
        if (this.vida < 0) this.vida = 0;
    }

}
