export class Navio {
    protected nome: string;
    protected capacidadeTripulacao: number;
    protected vida: number;
    protected velocidade: number;
    protected canhoes: number;
    private tipoNavio: string;

    // PROPRIEDADES ADICIONAIS

    protected vidaMaxima: number;

    constructor (nome: string, capacidadeTripulacao: number, vida: number, velocidade: number, canhoes: number, tipoNavio: string) {
        this.nome = nome;
        this.capacidadeTripulacao = capacidadeTripulacao;
        this.vida = vida;
        this.velocidade = velocidade;
        this.canhoes = canhoes;
        this.vidaMaxima = vida;
        this.tipoNavio = tipoNavio;

        if (!this.regras()) {
            throw new Error(`Navio inválido: ${this.nome}`)
        }
    }

    // TESTES DE SEGURANÇA

    protected testeVida(): boolean | void {
        if (this.vida > this.vidaMaxima) {
            this.vida = this.vidaMaxima;
            return true;
        } else if (this.vida < 0) {
            this.vida = 0;
            return false;
        }
    }

    protected regras(): boolean | void {
        console.log("A única regra é existir!");
    }

    // MÉTODOS OBRIGATÓRIOS

    public navegar(): void {
        console.log("O navio está navegando.");
    }

    public atacar(): void {
        console.log("O navio está atacando com os seus canhões!");
    }

    public receberDano(dano: number): void {
        if (dano >= 0) {
            this.vida -= dano;

            if (this.testeVida() == false) {
                console.log("O navio já está destruído e não pode ser atacado.");
            } else {
                console.log(`O navio ${this.nome} sofreu ${dano} de dano e está com ${this.vida} PV.`);
            }
        } else {
            console.log("Valor inválido! O dano é negativo.")
        } 
    }

    public exibirInformacoes(): void {
        console.log(`\n=== INFORMAÇÕES DO NAVIO ===\nNome do navio: ${this.nome}\nCapacidade máxima: ${this.capacidadeTripulacao}\nDefesa do navio: ${this.vida}\nVelocidade do navio: ${this.velocidade}\nCanhões: ${this.canhoes}\n`);
    }
}
