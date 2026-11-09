import type { IAtacante } from "./IAtacante";
import { Guerreiro } from "./Guerreiro";
import { Mago } from "./Mago";

const guerreiro = new Guerreiro("Xablau");
const mago = new Mago("Xonas");

function lutar(personagem: IAtacante, inimigo: IAtacante) {
    personagem.atacar();
    inimigo.atacar();
}

lutar(guerreiro, mago);
mago.curar(23);
