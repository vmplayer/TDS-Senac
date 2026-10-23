"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cachorro_1 = require("./Cachorro");
const dog = new Cachorro_1.Cachorro("Golden Retriever", "Marley", 4, "Amarelo");
dog.fazerSom();
dog.setName("Bob");
console.log(dog.getName());
