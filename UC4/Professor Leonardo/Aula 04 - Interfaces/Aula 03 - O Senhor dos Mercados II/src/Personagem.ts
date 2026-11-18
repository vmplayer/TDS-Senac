import { Ataque } from "./interfaces/Ataque";
import { Cura } from "./interfaces/Cura";

export class Personagem implements Ataque, Cura {
    private nome: string;
    private hp: number;
    private maxHP: number;
    private atk: number;
    private def: number;

    verificado = false;

    constructor (nome: string, hp: number, atk: number, def: number) {
        this.nome = nome;
        this.hp = hp;
        this.maxHP = 100;
        this.atk = atk;
        this.def = def;
    }

    protected verificar(tipo: string): boolean | void {
        switch (tipo) {
            case 'dano': // Usar quando o jogador receber dano.
                if (this.hp < 0) {
                    this.hp = 0;
                    return false;
                } else {
                    return true;
                }
                
            case 'cura': // Verificação para quando o jogador for curado.
                if (this.hp > this.maxHP) {
                    this.hp = this.maxHP;
                    return true; 
                }

                break;

            case 'vida': // Verificação de vida.
                if (this.hp <= 0) {
                    return false;
                } else {
                    return true;
                }
        }
    }

    public exibirStatus(): string {
        return `\n=== STATUS DO PERSONAGEM ===\n\nNome: ${this.nome}\n  HP: ${this.hp}/${this.maxHP}\n ATK: ${this.atk}\n DEF: ${this.def}`;
    }

    public getNome(): string {
        return this.nome;
    }

    public getHP(): number {
        return this.hp;
    }

    public getMaxHP(): number {
        return this.maxHP
    }

    public getATK(): number {
        return this.atk;
    }

    public getDEF(): number {
        return this.def;
    }

    public causarDano(valor: number) {
        if (this.verificar('dano') === true) {
            this.hp -= valor;
        } else {
            console.log("O personagem está morto e não pode atacar.")
        }
    }

    public curar(valor: number) {
        this.hp += valor;
        this.verificar('cura')
    }
}
