import * as rls from 'readline-sync';
import { Personagem } from './Personagem';
import { Guerreiro } from './Guerreiro';
import { Arqueiro } from './Arqueiro';

function chamarMenu(): void {
    let executando: boolean = true;

    while (executando) {
        console.clear();
        console.log(ultimaFrase);
        console.log(`\n === MENU ===\n[1] - OPÇÃO 1\n[2] - SELECIONAR UM HERÓI\n[3] - VER STATUS\n[4] - FECHAR O JOGO`);
        const opcao = rls.keyIn('', { limit: '1234' });

        switch (opcao) {
            case '1':
                console.log("Opção 1 selecionada!");
                break;
            case '2':
                selecionarHeroi();
                break;
            case '3':
                verStatus();
                break;
            case '4':
                console.log('FECHANDO O JOGO...');
                return;
        }
    }
}

function selecionarHeroi(): void {
    console.clear();
    console.log('=== SELECIONE UM PERSONAGEM ===');
    let numHerois = '';

    herois.forEach((heroi, i) => {
        console.log(`[${i + 1}] - ${heroi.getNome().toUpperCase()}`);
        numHerois += (i + 1).toString();
    })
    let opcao2: any = Number(rls.keyIn('', { limit: numHerois + 1 }));
    
    heroiSelecionado = herois[opcao2 - 1];
    ultimaFrase = `O HERÓI ${heroiSelecionado.getNome().toUpperCase()} FOI SELECIONADO!`;
}

function verStatus(): void {
    console.clear();
    console.log(heroiSelecionado.exibirStatus());
    rls.keyInPause('\nPRESSIONE QUALQUER TECLA PARA CONTINUAR...');
    ultimaFrase = '';
}

const seuZe: Guerreiro = new Guerreiro("Seu Zé", 70, 17, 26);
const Fredo: Arqueiro = new Arqueiro("Fredo", 80, 17, 18, 10);
const Samuel: Personagem = new Personagem("Samuel", 60, 15, 16);
const Diegolas: Personagem = new Personagem("Diegolas", 65, 12, 13);

const herois: Personagem[] = [
    seuZe,
    Fredo,
    Samuel,
    Diegolas
];

let heroiSelecionado: Personagem = seuZe;
let ultimaFrase: string = "";

chamarMenu();
