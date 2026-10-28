export class Conta {
    protected saldo: number;

    constructor (saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    protected atualizarSaldo(valor: number): void {
        this.saldo = valor;
    }
}