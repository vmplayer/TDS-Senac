import { Cachorro } from "./Cachorro";

const dog: Cachorro = new Cachorro("Golden Retriever", "Marley", 4, "Amarelo");

dog.fazerSom();

dog.setName("Bob");

console.log(dog.getName());

// private -> só a própria classe pode acessar diretamente usando 'this.atributo'. O restante precisa usar 'getAttribute' ou 'setAttribute'.
// public -> qualquer um acessa e modifica diretamente. Não precisa de getters ou setters.
// protected -> tanto a classe pai quanto as classes filhas podem acessar diretamente. O restante precisa usar 'getAttribute' ou 'setAttribute'.

/*
    EXERCÍCIO: Herança e Protected
    Crie uma classe chamada Personagem com:
    - Os atributos protected nome: string e protected vida: number;
    - Um construtor que receba o nome e inicie a vida em 100;
    - Um método curar(), que aumente a vida em 18;
    - Um método 'mostrarDados()', que exiba o nome e a vida.
*/