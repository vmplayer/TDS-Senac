import { Pagamento } from "./Pagamento";

export class CartaoCredito extends Pagamento {
    processar(): void {
        console.log("O pagamento com o cartão de crédito foi aprovado!");
    }
}
