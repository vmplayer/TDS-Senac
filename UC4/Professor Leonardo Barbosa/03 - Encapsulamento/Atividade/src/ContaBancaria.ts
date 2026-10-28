export class ContaBancaria {
    private saldo: number;

    constructor (saldo: number) {
        this.saldo = saldo;
    }

    public consultarSaldo() {
        console.log(`Saldo: R$${this.saldo}`);
    }

    public depositar(valor: number) {
        if (valor > 0) {
            this.saldo += valor;
        } else {
            console.log("Valor insuficiente para fazer um depósito.")
        }
    }
}
