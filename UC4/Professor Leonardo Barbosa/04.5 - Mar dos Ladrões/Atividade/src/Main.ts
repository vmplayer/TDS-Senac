import { Navio } from "./Navio";
import { Bergantim } from "./Bergantim";
import { Chalupa } from "./Chalupa";
import { Galeao } from "./Galeao";

const chalupa = new Chalupa("Charuto da Silva", 8, 35, 90, 3)
const galeao = new Galeao("Galo", 40, 90, 30, 8)
const navios: Navio[] = [
//  new navio(nome, capacidadeTripulacao, vida, velocidade, canhoes)
    new Bergantim("Berga", 12, 50, 70, 5),
    new Chalupa("ChaCha", 8, 35, 90, 3),
    new Galeao("Radio GaGa", 40, 90, 30, 6)
];

navios.forEach(navio => {
    navio.exibirInformacoes();
})

// Esse aqui vale pela 3, 4, 5 e 9
navios.forEach(navio => {
    navio.navegar();
    navio.atacar();
    navio.receberDano(12);
    console.log();
})

chalupa.explorarIlha();
galeao.receberDano(12);
galeao.exibirInformacoes();
galeao.repararNavio(12);
galeao.exibirInformacoes();

chalupa.receberDano(-2)
galeao.repararNavio(124214) // Não ultrapassou o limite
galeao.exibirInformacoes()