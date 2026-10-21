/*
Criem uma classe Personagem que tenha:
    - nome
    - vida
    - dinheiro

Coloque todos os atributos como 'private'
Crie um método que mostra a vida (exemplo: mostrarVida())
Crie um método que modifica a vida (exemplo: mudarVida(vida: number))
*/

import { Personagem } from "./Personagem";

const personagem: Personagem = new Personagem ("Fulaninho", 100, 10);

console.log(`HP: ${personagem.getVida()}`); // 100
personagem.setVida(-50);
console.log(`HP: ${personagem.getVida()}`); // 0

personagem.setNome("Jo")
console.log(`NOME: ${personagem.getNome()}`); // Jo

// Crie uma classe chamada Cachorro
// Coloque atributos no cachorro
// Coloque os atributos 'private'
// Crie o constructor
// Crie os métodos 'getters' e os 'setters'
// Crie 3 cachorros no index e chame seus métodos
