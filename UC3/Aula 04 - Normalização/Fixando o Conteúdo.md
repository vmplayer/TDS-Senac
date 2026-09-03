# Fixando o conteúdo

### 1 - Múltipla escolha
Uma tabela em que uma célula guarda "SP, RJ, MG" (vários estados numa célula só) viola qual forma normal?

* Primeira Forma Normal (1FN)
* Segunda Forma Normal (2FN)
* Terceira Forma Normal (3FN)
* Nenhuma — isso é permitido

### 2 - Associe as colunas
**(A) Anomalia de inserção    (B) Anomalia de atualização    (C) Anomalia de exclusão**

**()** Ao apagar o único pedido de um cliente, perde-se o cadastro dele por tabela.

**()** Mudar um dado repetido exige alterar várias linhas — esquecer uma gera inconsistência.

**()** Não é possível cadastrar um cliente novo que ainda não fez nenhum pedido.

### 3 - Normalize a tabela
A tabela abaixo está toda "espremida" numa única tabela. Identifique quais campos deveriam sair dela e formar tabelas próprias, e diga o motivo (1FN, 2FN ou 3FN).

| id_matricula | aluno | id_curso | nome_curso | carga_horaria_curso |
| -----------: | :---: | -------: | :--------: | ------------------: |
| 1            | Bruno | 10       | UC3	       | 84                  |

* **[]** `nome_curso`
* **[]** `carga_horaria_curso`

### 4 - Verdadeiro ou falso
**(V)** Para estar na 3FN, uma tabela precisa antes estar na 2FN.

**(F)** Desnormalizar significa aplicar a normalização duas vezes seguidas.

**(V)** A dependência funcional é a base teórica por trás de todas as formas normais.

### 5 - Dissertativa
Explique por que a normalização é importante mesmo em um projeto pequeno, e cite pelo menos uma situação em que "desnormalizar" pode fazer sentido.

### 6 - Revisão do Bloco 1
Amarre as quatro aulas: explique, em um parágrafo curto, todo o caminho que percorremos desde "conversar com o cliente" (Aula 2) até "ter uma tabela pronta e bem organizada" (Aula 4), passando pelo desenho do MER (Aula 3).
