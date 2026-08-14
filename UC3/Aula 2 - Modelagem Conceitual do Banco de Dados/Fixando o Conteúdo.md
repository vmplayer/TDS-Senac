# Fixando o conteúdo

### 1 - Classifique
Classifique cada requisito abaixo como `(F)` funcional ou `(NF)` não funcional:

**(F)** O sistema deve emitir um recibo em PDF ao final da compra."

**(NF)** O sistema deve suportar 500 usuários simultâneos sem travar."

**(NF)** As senhas dos usuários devem ficar criptografadas no banco."

**(F)** O sistema deve permitir cancelar um pedido em até 24h."

### 2 - Estudo de caso
Você está modelando o banco de uma pizzaria que faz entregas. Escreva dois requisitos funcionais e um requisito não funcional que fariam sentido para esse sistema.

```txt
Requisitos funcionais:
1. Uma nota fiscal deve ser gerada com o código do pedido.
2. O sistema deve armazenar os pedidos anteriores em uma aba: "Pedidos".

Requisito não-funcional:
1. O cardápio deve estar disponível offline.
```

### 3 - Monte o dicionário de dados
Ainda pensando na pizzaria: monte um mini dicionário de dados (nome do campo, tipo, tamanho e descrição) para a entidade Pizza, com pelo menos 4 campos.

| Nome do campo         | Tipo    | Tamanho | Descrição   |
| :-------------------: | :-----: | :-----: | :---------: |
| Frango com Catupiry   | Salgada | Média   | Pizza ótima |
| Quatro Queijos        | Salgada | Família | Pizza ótima |
| Calabresa             | Salgada | Grande  | Pizza boa   |
| Chocolate meio-amargo | Doce    | Pequena | Pizza boa   |

### 4 - Verdadeiro ou falso
**(F)** A união de dois conjuntos traz apenas os elementos que aparecem nos dois ao mesmo tempo.

**(V)** A interseção de dois conjuntos traz apenas os elementos comuns a ambos.

**(V)** Definir o domínio de um atributo ainda na modelagem conceitual ajuda a evitar dados inconsistentes no futuro.

### 5 - Dissertativa curta
Explique com suas palavras o que é integridade referencial, dando um exemplo diferente do usado na aula (pode ser de qualquer sistema do dia a dia: escola, loja, streaming...).

```txt
Você é coordenador de uma escola de ensino médio, então, ao analisar o banco de dados, você se depara com duas tabelas:

- alunos_da_silva
- matriculas_da_silva

A tabela de matriculas ficaria apontando para o aluno cadastrado.
Se você excluísse o aluno cadastrado, a tabela de matriculas ficaria apontando para o "nada".

Integridade referencial nada mais é que o conceito responsável por impedir que isso aconteça, enquanto o aluno de ID 15 estiver sendo mencionado na tabela de matriculas, o aluno não pode ser excluído na tabela de alunos.
```
