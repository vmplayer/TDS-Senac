// Como exportamos a classe, nós agora podemos importá-la
import { Cachorro } from "./Cachorro";
import { Carro } from "./Carro";

// Para criar um objeto, criamos uma variável que deve ser do tipo da classe (Cachorro)
// Depois, usamos a palavra 'new' para criar um novo Cachorro
// Dentro dos parênteses, precisamos colocar todas as informações que o Constructor pede
const meuCachorro: Cachorro = new Cachorro("Tobby", 10.50, "Vira-lata");

// Agora, podemos acessar as informações do cachorro. Por exemplo: para ver o nome:
console.log(meuCachorro.nome);
console.log(meuCachorro.raca);

// Posso também chamar os métodos para ver o que o cachorro faz:
meuCachorro.latir();

const carroUm: Carro = new Carro("Nissan", "Cupê Esportivo de Alta Performance", 2007);
const carroDois: Carro = new Carro("Porsche", "Superesportivo / Gran Turismo", 2020);
const carroTres: Carro = new Carro("DeLorean Motor Company", "Cupê Esportivo Clássico", 1981);

console.log(`Você tem um carro da ${carroUm.marca}, ${carroUm.ano}, ${carroUm.tipo}`);
console.log(`Você tem um carro da ${carroDois.marca}, ${carroDois.ano}, ${carroDois.tipo}`);
console.log(`Você tem um carro da ${carroTres.marca}, ${carroTres.ano}, ${carroTres.tipo}`);

console.log(`${carroUm.marca} buzinou para ${carroDois.marca}`);
carroUm.buzinar();
carroTres.andar();