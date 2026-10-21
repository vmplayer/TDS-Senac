export class Personagem {
    private nome: string;
    private vida: number;
    private dinheiro: number;

    constructor (nome: string, vida: number, dinheiro: number) {
        this.nome = nome;
        this.vida = vida;
        this.dinheiro = dinheiro;
    }

    getNome(): string {
        return this.nome;
    }

    setNome(novoNome: string): void {
        this.nome = novoNome;
    }

    getVida(): number {
        return this.vida;
    }

    setVida(novaVida: number): void {
        if (novaVida < 0) {
            novaVida = 0
        }

        this.vida = novaVida;
    }

    getDinheiro(): number {
        return this.dinheiro;
    }

    setDinheiro(novoDinheiro: number): void {
        this.dinheiro = novoDinheiro;
    }
}
