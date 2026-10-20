/*
    1. Crie uma classe chamada Pokemon.
    O pokemon deve ter um nome(string), ataque(number), e um poder.
    O poder é uma classe que vamos criar também.

    Métodos do Pokémon:
    falar -> um método que repete o nome do pokémon algumas vezes.
    atacar -> um método que recebe outro pokémon e ataca ele, tirando vida dele.
    atacarComPoder -> um método que recebe outro pokémon e ataca ele também, porém diz o nome do poder e usa o ataque do poder.

    2. Crie uma classe chamada Poder. Ela deve ter um nome(string) e ataque(number). Não precisa de nenhum método, exceto o Constructor.

    3. Crie dois poderes e tenha dois pokémons no index e simule uma pequena batalha entre eles.
*/

import { Poder } from "./Poder";
import { Pokemon } from "./Pokemon";

const poder: Poder = new Poder("Controle mental", 30);
const pokemon: Pokemon = new Pokemon("MewTwo", 100, 25, poder);

const poderpk2: Poder = new Poder("Bola de fogo", 12)
const pokemon2: Pokemon = new Pokemon("Charmander", 40, 12, poderpk2)

console.log(`
    == POKÉMON ==
Nome: ${pokemon.nome}
Vida: ${pokemon.vida}
Ataque: ${pokemon.ataque}
Poder: ${pokemon.poder.nome}
Dano do poder: ${pokemon.poder.ataque}
`)

pokemon.atacar(pokemon2);
pokemon2.atacarComPoder(pokemon);
pokemon2.falar();
pokemon.atacarComPoder(pokemon2);
pokemon.falar()
