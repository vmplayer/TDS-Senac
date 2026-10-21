import { Poder } from "./Poder"

export class Pokemon {
    public nome: string;
    public vida: number;
    public ataque: number;
    public poder: Poder;

    constructor (nome: string, vida: number, ataque: number, poder: Poder) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.poder = poder;
    }

    falar(): void {
        console.log(`[${this.nome}]: ${this.nome}, ${this.nome}. ${this.nome}!`);
    }

    atacar(pokemonDois: Pokemon): void {
        console.log(`[Sistema]: ${this.nome} atacou ${pokemonDois.nome}`);
        pokemonDois.vida -= this.ataque;

        this.verificarVida(pokemonDois);
    }

    atacarComPoder(pokemonDois: Pokemon): void {
        console.log(`[Sistema]: ${this.nome} atacou ${pokemonDois.nome} com ${this.poder.nome}.`);
        pokemonDois.vida -= this.poder.ataque;

        this.verificarVida(pokemonDois);
    }

    verificarVida(pokemonDois: Pokemon): void {
        if (pokemonDois.vida <= 0) {
            pokemonDois.vida = 0;
            console.log(`[Sistema]: ${pokemonDois.nome} foi eliminado por ${this.nome}.`);
        }
    }
}
