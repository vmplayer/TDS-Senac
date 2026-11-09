/*
    Uma empresa precisa desenvolver um sistema para organizar as funções de seus funcionários.

    Cada funcionario possui responsabilidades diferentes:
    - O DESENVOLVEDOR pode trabalhar e programar.
    - O GERENTE pode trabalhar e gerenciar equipes.
    - O LÍDER TÉCNICO pode trabalhar, programar e gerenciar equipes.

    Para organizar essas responsabilidades, você deverá utilizar 3 interfaces:
    - ITrabalhador : Possui o método trabalhar(): void;
    - IProgramador : Possui o método programar(): void;
    - IGerente     : Possui o método gerenciar(): void;

    Todas as classes (desenvolvedor, gerente e liderTecnico) deverão possuir também um atributo nome. Cada método deve retornar uma mensagem.

    Crie um objeto de cada no index e chame seus métodos.
*/

import { Gerente } from "./Gerente";
import { LiderTecnico } from "./LiderTecnico";
import { Programador } from "./Programador";

const prog = new Programador("João");
const gerente = new Gerente("Eduardo");
const lider = new LiderTecnico("Mário")

prog.programar();
prog.trabalhar();
gerente.trabalhar();
gerente.gerenciar();
lider.trabalhar();
lider.programar();
lider.gerenciar();
