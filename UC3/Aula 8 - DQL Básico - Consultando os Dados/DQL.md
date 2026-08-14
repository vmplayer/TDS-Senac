# DQL - Como buscar informações

## DQL significa `Data Query Language`, ou `Linguagem de Consulta de Dados`. Através dela nós conseguimos buscar os dados que precisamos. Todos os comandos de DQL envolvem o `SELECT`.

### Passo 1 - Como selecionar toda as colunas e linhas de uma tabela:
```sql
    SELECT * FROM nome_da_tabela;
```

```sql
    SELECT * FROM livros;
```

### Passo 2 - Como selecionar uma coluna específica:
```sql
    SELECT nome_da_coluna FROM nome_da_tabela;
```

```sql
    SELECT titulo FROM livros;
```

### Passo 3 - Como selecionar várias colunas de uma tabela:
```sql
    SELECT nome_da_coluna, nome_da_outra_coluna FROM nome_da_tabela;
```

```sql
    SELECT titulo, autor FROM livros;
```

### Passo 4 - Como dar um "apelido" para uma ou mais colunas (APENAS NA HORA DA PESQUISA):
```sql
    SELECT nome_da_coluna AS apelido_da_coluna FROM nome_da_tabela;
```

```sql
    SELECT titulo AS Titulo_do_Livro FROM livros;
```

```sql
    SELECT titulo AS Titulo_do_Livro, autor AS Autor_do_Livro FROM livros;
```

### Passo 5 - Como fazer uma consulta com condição (por exemplo, ao invés de selecionar TODOS os livros, quero apenas os livros do autor X):

```sql
    SELECT * FROM nome_da_tabela_ WHERE condicao;
```

```sql
    -- Seleciona apenas o slivros que tiverem a coluna autor com o valor igual a "J. R. R. Xablau"
    -- Traduzindo: seleciona apenas os livros do autor "J. R. R. Xablau"
    SELECT * FROM livros WHERE autor = "J. R. R. Xablau";
```

### Exercício:

Crie uma tabela carros, com id_carro, modelo, cor e marca

Insira pelo menos 10 carros, divididos entre 3 marcas e 2 cores.

Selecione TUDO da tabela carros.

Selecione apenas o modelo e marcas.

Selecione apenas os carros que tiverem a marca `FERRARI`.

Selecione a mara e a cor, mas apenas dos carros que tiverem a cor `vermelho`. Coloque o apelido Marca_Do_Carro e Cor_Do_Carro.
