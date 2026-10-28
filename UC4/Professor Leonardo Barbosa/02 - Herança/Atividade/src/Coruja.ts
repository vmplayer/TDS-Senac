import { Ave } from "./Ave";

export class Coruja extends Ave {
    constructor (nome: string, idade: number) {
        super(nome, idade);
    }

    girarCabeca(): void {
        console.log(`${this.nome} está girando a cabeça 360º.`)
    }
}