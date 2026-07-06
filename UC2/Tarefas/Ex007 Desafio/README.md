# Desafio - Aula 07
O desafio da aula 07 foi desenvolvido utilizando a tecnologia [Electron](https://www.electronjs.org/pt/) para fazer uma interface de verdade. Ou seja, **não foram** utilizadas tecnologias como o [Readline-sync](https://www.npmjs.com/package/readline-sync).

## Como iniciar o projeto e executar:
Para iniciar o projeto, abra a pasta e cole este comando no terminal:

```bash
npm init -y && npm install electron --save-dev
```

Depois, entre no seu arquivo `package.json` e substitua ele por este arquivo aqui:
```json
{
  "name": "desafio-electron",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "electron .",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "vmplayer",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "electron": "^43.0.0"
  }
}

```
>[!TIP]
> O arquivo _package.json_ deve ser substituído, pois nessa versão há o comando "start", utilizado para executar o projeto.

Depois, executa o programa com este comando no terminal:
```bash
npm run start
```

## Arquivos
* `index.html`: Este arquivo contém as propriedades da interface do programa, é o corpo que guarda tudo que você irá visualizar na tela.
* `index.js`: Este arquivo contém as propriedades para fazer o _Electron_ funcionar, aqui ficam configurações de tamanho da janela, de abrir e fechar o programa e outras coisas.
* `script.js`: Este arquivo é o desafio em si, aqui fica armazenado o sistema de adicionar os nomes, sistema de pesquisa, e entre outros.
