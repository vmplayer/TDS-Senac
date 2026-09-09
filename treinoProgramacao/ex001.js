// -=+=- QUESTÃO 1 -=+=-

function criarFichaAluno(nome, idade) {
    let aluno = {
            nome,
            idade
        };

    return aluno;
};

let resul1 = criarFichaAluno("Ana", 18);
console.log(resul1);
resul1 = criarFichaAluno("Carlos", 21);
console.log(resul1);
resul1 = criarFichaAluno("Fernanda", 16);
console.log(resul1);

// -=+=- QUESTÃO 2 -=+=-

function montarMensagem(saudacao, nome) {
    if (saudacao === "" || nome === "") {
        return "";
    } else {
        return saudacao + ' ' + nome;
    }
};

let result2 = montarMensagem('Olá', 'Carlos');
console.log(result2);
result2 = montarMensagem('Bom dia', 'Marina');
console.log(result2)
result2 = montarMensagem('Bem-vindo', 'Pedro');
console.log(result2);

// -=+=- QUESTÃO 3 -=+=-

function transformarPontuacaoEmTexto(pontos) {
    return pontos.toString();
};

let result3 = transformarPontuacaoEmTexto(250);
console.log(result3);
result3 = transformarPontuacaoEmTexto(0);
console.log(result3);
result3 = transformarPontuacaoEmTexto(42.5);
console.log(result3);
result3 = transformarPontuacaoEmTexto(-10);
console.log(result3);
