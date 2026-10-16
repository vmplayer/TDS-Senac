import { Personagem } from "./Personagem";

const personagem: Personagem = new Personagem("Xablau", 25);

console.log(personagem.vida); // 50

personagem.curar();

console.log(personagem.vida); // 60

personagem.dano();

console.log(personagem.vida) // 50
personagem.curar();
console.log(personagem.vida) // 60
personagem.curar();
console.log(personagem.vida) // 70
personagem.curar();
console.log(personagem.vida) // 80
personagem.curar();
console.log(personagem.vida) // 90
personagem.curar();
console.log(personagem.vida) // 100
personagem.curar();
console.log(personagem.vida) // 100
personagem.curar();
console.log(personagem.vida) // 100
personagem.curar();
console.log(personagem.vida) // 100

personagem.dano();
console.log(personagem.vida) // 90
personagem.dano();
console.log(personagem.vida) // 80
personagem.dano();
console.log(personagem.vida) // 70
personagem.dano();
console.log(personagem.vida) // 60
personagem.dano();
console.log(personagem.vida) // 50
personagem.dano();
console.log(personagem.vida) // 40
personagem.dano();
console.log(personagem.vida) // 30
personagem.dano();
console.log(personagem.vida) // 20
personagem.dano();
console.log(personagem.vida) // 10
personagem.dano();
console.log(personagem.vida) // 0
personagem.dano();
console.log(personagem.vida) // 0
personagem.dano();
console.log(personagem.vida) // 0
