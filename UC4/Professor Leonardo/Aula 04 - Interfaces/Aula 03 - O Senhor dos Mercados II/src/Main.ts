import * as rls from 'readline-sync';
import { Personagem } from './Personagem';

function chamarMenu(): void {
    let executando: boolean = true;

    while (executando) {
        console.log(`\n === MENU ===\n[1] - OPÇÃO 1\n[2] - OPÇÃO 2\n[3] - VER STATUS\n[4] - FECHAR O JOGO`);
        const opcao = rls.questionInt('', { limit: '1234'});

        switch (opcao) {
            case 1:
                console.log("Opção 1 selecionada!");
                break;
            case 2:
                console.log("Opção 2 selecionada!");
                break;
            case 3:
                console.log("Opção 3 selecionada!");
                break;
            case 4:
                console.log('Fechando o jogo...');
                return;
        }
    }
}

const seuZe: Personagem = new Personagem("Seu Zé", 70, 17, 26);
const Fredo: Personagem = new Personagem("Fredo", 80, 17, 18);
const Samuel: Personagem = new Personagem("Samuel", 60, 15, 16);
const Diegolas: Personagem = new Personagem("Diegolas", 65, 12, 13);

chamarMenu();
