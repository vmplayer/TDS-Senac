import { Pagamento } from "./Pagamento";

export class Boleto extends Pagamento {
    processar(): void {
        console.log("O boleto foi pago com sucesso!");
    }
}