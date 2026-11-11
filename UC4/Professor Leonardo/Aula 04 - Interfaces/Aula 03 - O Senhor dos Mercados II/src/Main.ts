import * as rls from 'readline-sync';
import { Personagem } from './Personagem';

function chamarMenu(): void {
    let executando: boolean = true;

    while (executando) {
        console.log(`\n === MENU ===\n[1] - OPÇÃO 1\n[2] - OPÇÃO 2\n[3] - VER STATUS\n[4] - OPÇÃO 4`)
        const opcao = rls.questionInt('', { limit: '1234'})
    }
}

const seuZe: Personagem = new Personagem("Seu Zé", 70, 17, 26);
const Fredo: Personagem = new Personagem("Fredo", 80, 17, 18);
const Samuel: Personagem = new Personagem("Samuel", 60, 15, 16);
const Diegolas: Personagem = new Personagem("Diegolas", 65, 12, 13);

chamarMenu();
