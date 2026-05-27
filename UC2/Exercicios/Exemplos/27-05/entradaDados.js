const entrada = require('readline-sync')
if (!entrada) console.log('Se não tiver inicializado um repositório, execute \'npm init -y\' e depois \'npm install readline-sync\' para instalar todas as depêndencias necessárias.')

let nome = entrada.question("Qual o seu nome? ")

console.log(`Ola, ${nome}!`)

/*
======= INICIALIZAR O PROJETO =======
npm init -y
NPM = Node Package Manager
Init = Initialization
-Y = Yes (Ignora todas as perguntas que vão seguir)

======= INSTALAR AS DEPENDÊNCIAS =======
npm install nome_da_biblioteca
> Todas as dependências ficarão dentro da pasta chamada './node_modules/'.
*/
