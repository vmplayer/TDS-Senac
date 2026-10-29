import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
    constructor (saldo: number) {
        super(saldo);
    }

    public aplicarJuros(juros: number): void {
        this.atualizarSaldo(this.saldo * (juros / 100));
    }
}
