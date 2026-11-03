export class Navio {
    protected nome: string;
    protected capacidadeTripulacao: number;
    protected vida: number;
    protected velocidade: number;
    protected canhoes: number;
    private tipoNavio: string;

    // Propriedades adicionais

    protected vidaMaxima: number;

    constructor (nome: string, capacidadeTripulacao: number, vida: number, velocidade: number, canhoes: number, tipoNavio: string) {
        this.nome = nome;
        this.capacidadeTripulacao = capacidadeTripulacao;
        this.vida = vida;
        this.velocidade = velocidade;
        this.canhoes = canhoes;
        this.vidaMaxima = vida;
        this.tipoNavio = tipoNavio;
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

    private regras(): boolean | void {
        switch (this.tipoNavio) {
            case "bergantim":
                if (this.capacidadeTripulacao <= 20 && this.capacidadeTripulacao > 0) {
                    if (this.velocidade >= 50) {
                        if (this.vida >= 40 && this.vida < 80) {
                            if (this.canhoes >= 4 && this.canhoes < 6) {
                                return true;
                            } else {
                                console.log("Quantidade insuficiente de canhões ou excessiva.");
                                return false;
                            }
                        } else {
                            console.log("Vida muito baixa ou excessiva.");
                            return false;
                        }
                    } else {
                        console.log("Velocidade muito baixa.");
                        return false;
                    }
                } else {
                    console.log("O navio tem uma capacidade de tripulação insuficiente ou acima de 20 tripulantes.");
                    return false;
                }

                break;       
            case "chalupa":
                if (this.capacidadeTripulacao <= 10 && this.capacidadeTripulacao > 0) {
                    if (this.velocidade >= 80) {
                        if (this.vida <= 40 && this.vida > 0) {
                            if (this.canhoes <= 4 && this.canhoes < 0) {
                                return true;
                            } else {
                                console.log("Quantidade insuficiente de canhões.");
                                return false;
                            }
                        } else {
                            console.log("Vida muito alta ou menor/igual a zero.");
                            return false;
                        }
                    } else {
                        console.log("Velocidade muito baixa.");
                        return false;
                    }
                } else {
                    console.log("O navio tem uma capacidade de tripulação insuficiente ou acima de 10 tripulantes.");
                    return false;
                }
                
                break;
            case "galeao":
                if (this.capacidadeTripulacao <= 50 && this.capacidadeTripulacao > 0) {
                    if (this.velocidade <= 40 && this.velocidade > 0) {
                        if (this.vida >= 60) {
                            if (this.canhoes >= 6) {
                                return true;
                            } else {
                                console.log("Quantidade insuficiente de canhões.");
                                return false;
                            }
                        } else {
                            console.log("Vida muito baixa.");
                            return false;
                        }
                    } else {
                        console.log("Velocidade muito alta ou igual/menor que zero.");
                        return false;
                    }
                } else {
                    console.log("O navio tem uma capacidade de tripulação insuficiente ou acima de 50 tripulantes.");
                    return false;
                }
                
                break;
        }
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
            this.testeVida();

            if (this.testeVida() == false) {
                console.log("O navio já está destruído e não pode ser atacado.");
            } else {
                console.log(`O navio ${this.nome} sofreu ${dano} de dano e está com ${this.vida} PV.`);
            }
        } else {
            console.log("Valor inválido! O dano é negativo.")
        } 
    }

    exibirInformacoes(): void {
        console.log(`     === INFORMAÇÕES DO NAVIO ===\n\nNome do navio: ${this.nome}\nCapacidade máxima: ${this.capacidadeTripulacao}\nDefesa do navio: ${this.vida}\nVelocidade do navio: ${this.velocidade}\nCanhões: ${this.canhoes}`);
    }
}
