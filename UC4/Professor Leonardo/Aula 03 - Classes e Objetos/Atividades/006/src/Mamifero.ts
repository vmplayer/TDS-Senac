// Esta classe será nossa 'classe pai'
export class Mamifero {
    private nome: string;
    protected patas: number;
    private pelo: string;

    constructor(nome: string, patas: number, pelo: string) {
        this.nome = nome;
        this.patas = patas;
        this.pelo = pelo;
    }

    fazerSom(): void {
        console.log(`${this.nome} está fazendo um barulho.`);
    }

    getName(): string {
        return this.nome;
    }

    setName(newName: string): void {
        this.nome = newName;
    }
}
