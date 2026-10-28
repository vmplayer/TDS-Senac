export class Livro {
    public titulo: string;

    constructor (titulo: string) {
        this.titulo = titulo;
    }

    exibirTitulo(): void {
        console.log(this.titulo);
    }
}
