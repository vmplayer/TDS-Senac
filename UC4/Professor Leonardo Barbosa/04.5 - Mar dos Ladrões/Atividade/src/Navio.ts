export class Navio {
    private nome: string;
    private capacidadeTripulacao: number;
    private vida: number;
    private velocidade: number;
    private canhoes: number;

    constructor (nome: string, capacidadeTripulacao: number, vida: number, velocidade: number, canhoes: number) {
        this.nome = nome;
        this.capacidadeTripulacao = capacidadeTripulacao;
        this.vida = vida;
        this.velocidade = velocidade;
        this.canhoes = canhoes;
    }

    public navegar(): void {
        console.log("O navio está navegando.");
    }

    public atacar(): void {
        console.log("O navio está atacando com os seus canhões!");
    }

    public receberDano(dano: number): void {
        if (this.vida < 0) {
            this.vida = 0;
            console.log("O navio já está destruído e não pode ser atacado.")
        } else {
            console.log(`O navio ${this.nome} sofreu ${dano} de dano e está com ${this.vida} PV.`)
        }
    }

    exibirInformacoes(): void {
        console.log(`     === INFORMAÇÕES DO NAVIO ===\n\nNome do navio: ${this.nome}\nCapacidade máxima: ${this.capacidadeTripulacao}\nDefesa do navio: ${this.vida}\nVelocidade do navio: ${this.velocidade}\nCanhões: ${this.canhoes}`)
    }
}

