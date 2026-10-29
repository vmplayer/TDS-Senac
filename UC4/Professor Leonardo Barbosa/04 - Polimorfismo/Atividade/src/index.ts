import { Veiculo } from "./Veiculo";
import { Carro } from "./Carro";
import { Bicicleta } from "./Bicicleta";

const veiculos: Veiculo[] = [
    new Veiculo(),
    new Bicicleta(),
    new Carro()
];

veiculos.forEach(mov => {
    console.log(mov.mover());
})
