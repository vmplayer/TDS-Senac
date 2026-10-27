import { Animal } from "./Animal";
import { Ave } from "./Ave";
import { Coruja } from "./Coruja";
import { Crocodilo } from "./Crocodilo";
import { Mamifero } from "./Mamifero";
import { Reptil } from "./Reptil";

// Criando objetos
const cachorro = new Mamifero("Rex", 5, true);
const cobra = new Reptil("Naja", 2, "escamas lisas");
const crocodilo = new Crocodilo("Thor", 6, "escamas grossas, ósseas e não sobrepostas");

cachorro.mover();      // herdado da classe Animal
cachorro.amamentar();  // método da classe Mamifero

cobra.mover();         // herdado da classe Animal
cobra.botarOvo();      // método da classe Reptil

crocodilo.mover();
crocodilo.botarOvo();
crocodilo.nadar();

/* ----- */

const crocodiloDois = new Crocodilo("Epitalossauro Jr.", 12, "escamas grossas, ósseas e não sobrepostas");
const dinossauroModerno = new Ave("Netyour Benjawar", 1);
const coruja = new Coruja("Coruja", 2);

let animais: Animal[] = [crocodiloDois, dinossauroModerno, coruja]

for (let animal of animais) {
    animal.comer();
}

/*
    === PERGUNTAS ===

    1. Por que foi possível armazenar objetos de classes diferentes no mesmo array?
        O tipo do array é 'Animal[]', todos os objetos herdam esta classe.
    2. Por que todos os objetos conseguem utilizar o método comer()?
        Pois o método comer é um método geral criado em Animal.
    3. Qual é a vantagem de implementar esse método apenas uma vez na classe Animal?
        Não precisa declarar para todos os animais, é uma declaração única.
*/
