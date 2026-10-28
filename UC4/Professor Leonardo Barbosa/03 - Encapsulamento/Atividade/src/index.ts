import { Carro } from "./Carro";
import { ContaBancaria } from "./ContaBancaria";
import { ContaPoupanca } from "./ContaPoupanca";
import { Livro } from "./Livro";
import { Conta } from "./Conta";

const livro = new Livro("O Guia Definitivo de TypeScript");

console.log(livro.titulo);
livro.exibirTitulo();

const conta = new ContaBancaria(150);

conta.consultarSaldo();
conta.depositar(100);
conta.consultarSaldo();

const carro = new Carro(100);

carro.exibirVelocidade();
carro.acelerar();
carro.acelerar();
carro.exibirVelocidade();

const contaPoupanca = new ContaPoupanca(100);
const contaBanco = new Conta(50)

contaPoupanca.aplicarJuros(10);
// contaBanco.saldo = 20; // Property 'saldo' is protected and only accessible within class 'Conta' and its subclasses.
// contaBanco.atualizarSaldo(100); // Property 'atualizarSaldo' is protected and only accessible within class 'Conta' and its subclasses.
