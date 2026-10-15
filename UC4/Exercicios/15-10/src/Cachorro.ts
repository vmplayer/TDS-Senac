// Toda classe começa SEMPRE com letra maiúscula
// A palavra 'export' permite que outros arquivos importem e usem esta classe
// A palavra 'class' inicia a declaração da classe
// Depois, colocamos o nome da classe, que deve ser IGUAL ao nome do arquivo, seguido de chaves.
export class Cachorro {
    // Todo o código da classe vai aqui dentro
    // Atributos são as coisas que o cachorro tem (atributos do cachorro)
    // São como variáveis, só que sem const e sem let

    nome: string;
    peso: number;
    raca: string;

    // Toda classe precisa de um método especial chamado 'constructor'
    // É ele que recebe os valores de nome, peso, raça, etc e cria o objeto
    constructor(meuNome: string, meuPeso: number, minhaRaca:string){
        this.nome = meuNome;
        this.peso = meuPeso;
        this.raca = minhaRaca;
    }

    // Métodos são funções. Elas são coisas que o cachorro faz.
    latir(): void {
        console.log(`${this.nome}: Au! Au! Au!`);
    }

    comer(): void {
        console.log(`${this.nome}: Nham! Nham!`);
    }   
}

