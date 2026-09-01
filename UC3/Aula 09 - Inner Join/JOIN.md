# JOIN - Como juntar informações de duas ou mais tabelas
JOIN significa, literalmente, JUNTAR. Ou seja, através deste comando, podemos fazer uma QUERY (CONSULTA) pegando informações de várias tabelas diferentes, DESDE QUE ELAS TENHAM LIGAÇÃO ENTRE SI!

### INNER JOIN

```sql
/*
Para selecionar as colunas de várias tabelas, precisamos informar primeiro
o nome da tabela, depois um ponto (.) e depois o nome da coluna. 
Exemplo: aluno.nome

Separamos as informações das várias tabelas com vírgula. 
Exemplo: aluno.nome, livro.titulo

Agora pense: Qual tabela possui as FKs (Foreign Keys)?
É esta tabela que virá depois do FROM.

Então, precisamos fazer a junção com as outras tabelas. Para isso, usamos INNER JOIN + a próxima tabela + on, depois do ON, precisamos identificar qual coluna nas duas tabelas liga uma na outra. Ou seja, as FOREIGN KEYS.
Exemplo: emprestimo.id_aluno = aluno.id_aluno

Repita o processo de INNER JOIN para quantas tabelas forem necessárias.
*/
SELECT aluno.nome, livro.titulo, emprestimo.data_emprestimo
FROM emprestimo
INNER JOIN aluno ON emprestimo.id_aluno = aluno.id_aluno
INNER JOIN livro ON emprestimo.id_livro = livro.id_livro;
```

1. Mostre o nome do aluno que fez o empréstimo de ID 1 e a data do empréstimo. Use WHERE depois do INNER JOIN.

```sql
    SELECT aluno.nome, emprestimo.data_emprestimo
    FROM emprestimo
    INNER JOIN aluno ON emprestimo.id_aluno = aluno.id_aluno
    WHERE emprestimo.id_emprestimo = 1;
```

1.2. Reescrita do exercício 1 com apelidos.

```sql
    SELECT a.nome, e.data_emprestimo
    FROM emprestimo AS e
    INNER JOIN aluno AS a ON e.id_aluno = a.id_aluno
    WHERE e.id_emprestimo = 1;
```

2. Mostre o nome e a turma do aluno que fez o empréstimo de ID 2. Use WHERE depois do INNER JOIN.

```sql
    SELECT emprestimo.id_emprestimo, aluno.nome, aluno.turma
    FROM emprestimo
    INNER JOIN aluno ON emprestimo.id_aluno = aluno.id_aluno
    WHERE emprestimo.id_emprestimo = 2;
```

2.1. Reescrita do exercício 2 com os apelidos.

```sql
    SELECT a.nome, a.turma
    FROM emprestimo AS e
    INNER JOIN aluno AS a ON e.id_aluno = a.id_aluno
    WHERE e.id_emprestimo = 2;
```

## Exercício de Inner Join

# Exercícios de `INNER JOIN`

## Parte 1 — JOIN entre duas tabelas

### 1. Clientes e pedidos

Mostre todos os pedidos juntamente com o nome do cliente que realizou cada pedido.

Mostre:

* número do pedido;
* nome do cliente;
* data do pedido;
* status.

---

### 2. Produtos e categorias

Mostre todos os produtos juntamente com a categoria à qual pertencem.

Mostre:

* nome do produto;
* preço;
* nome da categoria.

---

### 3. Pedidos e vendedores

Queremos descobrir qual vendedor foi responsável por cada pedido.

Mostre:

* número do pedido;
* nome do vendedor;
* setor do vendedor;
* data do pedido.

---

### 4. Itens e produtos

Mostre os produtos existentes nos itens dos pedidos.

Mostre:

* número do item;
* nome do produto;
* quantidade.

---

## Parte 2 — JOIN entre três tabelas

### 5. Cliente responsável por cada produto comprado

Queremos saber quem comprou cada produto.

Relacione:

`cliente → pedido → item_pedido`

Mostre:

* nome do cliente;
* número do pedido;
* número do produto;
* quantidade comprada.

---

### 6. Produtos existentes em cada pedido

Mostre todos os pedidos e os produtos que fazem parte deles.

Mostre:

* número do pedido;
* nome do produto;
* quantidade.

---

### 7. Clientes e vendedores

Queremos saber qual vendedor atendeu cada cliente em cada compra.

Mostre:

* nome do cliente;
* nome do vendedor;
* número do pedido;
* data do pedido.

---

### 8. Produto e sua categoria

Mostre apenas os produtos que já apareceram em algum pedido.

Relacione:

`item_pedido → produto → categoria`

Mostre:

* nome do produto;
* categoria;
* quantidade comprada.

---

## Parte 3 — JOIN entre quatro tabelas

### 9. Histórico de compras

Crie uma consulta mostrando um histórico detalhado das compras.

Relacione:

`cliente → pedido → item_pedido → produto`

Mostre:

* nome do cliente;
* número do pedido;
* nome do produto;
* quantidade;
* preço do produto.

---

### 10. Histórico de vendas por vendedor

Queremos visualizar todos os produtos vendidos por cada vendedor.

Relacione:

`vendedor → pedido → item_pedido → produto`

Mostre:

* vendedor;
* número do pedido;
* produto;
* quantidade.

---

### 11. Produtos comprados por clientes do Rio Grande do Sul

Mostre somente compras realizadas por clientes cujo estado seja `RS`.

Mostre:

* cliente;
* cidade;
* produto;
* quantidade.

---

### 12. Pedidos entregues

Mostre somente os produtos pertencentes a pedidos com status:

```text
Entregue
```

Mostre:

* número do pedido;
* cliente;
* produto;
* quantidade.

---

## Parte 4 — JOIN entre cinco tabelas

### 13. Relatório completo de vendas

Relacione:

```text
cliente
↓
pedido
↓
item_pedido
↓
produto
↓
categoria
```

Mostre:

* cliente;
* número do pedido;
* data;
* produto;
* categoria;
* quantidade;
* preço.

---

### 14. Produtos da categoria Games

Mostre todas as compras de produtos pertencentes à categoria:

```text
Games
```

Mostre:

* cliente;
* produto;
* quantidade;
* data do pedido.

---

### 15. Compras de computadores

Mostre os clientes que compraram produtos da categoria:

```text
Computadores
```

Mostre:

* cliente;
* cidade;
* produto;
* preço;
* data da compra.

---

## Parte 5 — JOIN com cálculos

Aqui já começa a ficar mais interessante.

### 16. Valor de cada item comprado

Sabemos que:

```text
valor do item = preço × quantidade
```

Mostre:

* número do pedido;
* produto;
* preço unitário;
* quantidade;
* valor do item.

---

### 17. Valor dos itens comprados por cada cliente

Mostre cada produto comprado e quanto aquele item custou para o cliente.

Mostre:

* cliente;
* produto;
* quantidade;
* preço;
* valor do item.

---

### 18. Compras acima de R$ 1.000

Mostre somente os itens cujo:

```text
preço × quantidade
```

seja superior a `1000`.

Mostre:

* cliente;
* produto;
* quantidade;
* valor do item.

---

### 19. Compras feitas pelo vendedor Marcos Silva

Mostre todos os produtos vendidos pelo vendedor:

```text
Marcos Silva
```

Mostre:

* cliente;
* produto;
* quantidade;
* data da venda.

---

### 20. Celulares vendidos

Mostre todas as vendas de produtos da categoria:

```text
Celulares
```

Mostre:

* cliente;
* vendedor;
* produto;
* quantidade;
* status do pedido.

---

# Desafio final

### 21. Relatório detalhado

A empresa quer gerar uma tabela com o histórico completo das vendas.

O resultado deverá apresentar:

* número do pedido;
* data;
* cliente;
* cidade do cliente;
* vendedor;
* setor do vendedor;
* produto;
* categoria;
* preço unitário;
* quantidade;
* valor total daquele item;
* status do pedido.

Organize os resultados do pedido mais recente para o mais antigo.

Para chegar ao resultado, será necessário relacionar **todas as seis tabelas do banco**.
