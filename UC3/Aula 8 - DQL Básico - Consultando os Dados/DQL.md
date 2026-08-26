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

### Passo 6 - Como selecionar tudo de uma tabela que seja DIFERENTE de algo (mostra tudo menos aquele valor)

```sql
    -- Seleciona todos os itens MENOS aqueles com o valor especificado.
    SELECT selecao FROM nome_da_tabela
    WHERE nome_da_coluna <> valor;
```

```sql
    SELECT * FROM livros
    WHERE genero <> 'Fantasia';
```

### Passo 7.1 - Como selecionar apenas valores que são maiores que algo
```sql
    -- Seleciona itens que tenham o preço MAIOR que 50
    SELECT selecao FROM nome_da_tabela
    WHERE nome_da_coluna > valor;
```

```sql
    SELECT * FROM livros
    WHERE preco > 50;
```

### Passo 7.2 - Como selecionar apenas valores que são menores que algo
```sql
    -- Seleciona itens que tenham o preço MENOR que 30
    SELECT selecao FROM nome_da_tabela
    WHERE nome_da_coluna < valor;
```

```sql
    SELECT * FROM livros
    WHERE preco < 30;
```

### Passo 8.1 - Como selecionar valores que são MAIORES OU IGUAIS a algo
```sql
    -- Seleciona itens que tenham o valor MAIOR OU IGUAL a algo
    SELECT selecao FROM nome_da_tabela
    WHERE nome_da_coluna >= valor;
```

```sql
    SELECT * FROM livros
    WHERE preco >= 50;
```

### Passo 8.2 - Como selecionar valores que são MENORES OU IGUAIS a algo
```sql
    -- Seleciona itens que tenham o valor MENOR OU IGUAL a algo
    SELECT selecao FROM nome_da_tabela
    WHERE nome_da_coluna <= valor;
```

```sql
    SELECT * FROM livros
    WHERE preco <= 50;
```

### Passo 9 - Como selecionar com duas ou mais condições ao mesmo tempo
```sql
    -- Seleciona itens que tenham a primeira condição mas que também tem o preço MENOR QUE o valor
    SELECT selecao FROM nome_da_tabela
    WHERE nome_da_coluna = valor AND nome_da_coluna < valor;
```

```sql
    SELECT * FROM livros
    WHERE genero = 'Fantasia' AND preco < 60;
```

### Passo 10 - Como selecionar com uma condição ou outra ao mesmo tempo
```sql
    -- Seleciona itens que tenham ou a primeira condição, ou a segunda
    SELECT selecao FROM nome_da_tabela
    WHERE nome_da_coluna = valor OR nome_da_coluna = valor;
```

```sql
    SELECT * FROM livros
    WHERE genero = 'Fantasia' OR genero = 'Distopia';
```

### Passo 11 - Como selecionar EXCLUINDO determinado valor de consulta (funciona parecido com o DIFERENTE)
```sql
    -- Seleciona todos os itens, MENOS o valor da condição
    SELECT selecao FROM nome_da_tabela
    WHERE NOT nome_da_coluna = valor;
```

```sql
    SELECT * FROM livros
    WHERE NOT genero = 'Fantasia';
```

### Passo 12 - Como selecionar apenas valores entre determinado intervalo
```sql
    -- Seleciona apenas itens cuja condição está entre valor 1 e valor 2
    SELECT selecao FROM nome_da_tabela
    WHERE nome_da_coluna BETWEEN valor AND valor;
```

```sql
    SELECT * FROM livros
    WHERE preco BETWEEN 20 AND 50;
```

### Passo 13 - Como selecionar apenas valores entre os que listarmos
```sql
    -- Seleciona apenas os itens que estejam de acordo com os valores da condição (podem ser mais que dois valores)
    SELECT selecao FROM nome_da_tabela
    WHERE nome_da_coluna IN (valor, valor, valor);
```

```sql
    SELECT * FROM livros
    WHERE genero IN ('Fantasia', 'Romance')
```

```sql
    -- Também podemos combinar condições usando AND e OR, por exemplo:
    SELECT * FROM livros
    WHERE genero IN ('Fantasia', 'Romance') AND preco > 30;
```

### Passo 14.1 - Como selecionar apenas um valor que COMEÇA com tal caractere
```sql
    -- Seleciona apenas itens que começam com valor
    SELECT selecao FROM nome_da_tabela
    WHERE nome_da_coluna LIKE 'valor%';
```

```sql
    SELECT * FROM livros
    WHERE titulo LIKE 'O%';
```

### Passo 14.2 - Como selecionar um valor que TERMINA com tal caractere
```sql
    -- Seleciona apenas itens que terminam com o valor exigido
    SELECT selecao FROM nome_da_tabela
    WHERE nome_da_coluna LIKE '%valor';
```

```sql
    SELECT * FROM livros
    WHERE titulo LIKE '%Xablau';
```

### Passo 14.3 - Como selecionar um valor que CONTÉM tal(is) caracteres
```sql
    -- Seleciona apenas itens que tenham o valor da condição em algum lugar
    SELECT selecao FROM nome_da_tabela
    WHERE nome_da_coluna LIKE '%valor%';
```

```sql
    SELECT * FROM livros
    WHERE titulo LIKE '%aventuras%';
```

### Passo 14.4 - Como selecionar um valor que tem um ou mais caracteres 'faltando'
```sql
    -- Seleciona um valor que contenha a palavra 'valo', sem se importar se a última letra for 'r', 'a', 'b', {...}
    SELECT selecao FROM nome_da_tabela
    WHERE nome_da_coluna LIKE 'valo_';
```

```sql
    -- Seleciona um ano tendo uma década de 80 sem se importar se é 81, 81, 83, etc.
    SELECT * FROM livros
    WHERE ano_publicacao LIKE '198_';
```

### Passo 15 - Como selecionar algo e ordenar por ordem alfabética/numérica

```sql
    -- ESSE COMANDO É O PADRÃO DO ORDER BY, NÃO SENDO OBRIGATÓRIO O USO DE "ASC"
    -- Ordena os itens pelo nome da coluna, de A a Z, de 0 a 9.
    SELECT selecao FROM nome_da_tabela
    ORDER BY nome_da_coluna ASC; -- ASCENDENTE
```

```sql
    -- Ordena os itens pelo nome da coluna, de Z a A, de 9 a 0.
    SELECT selecao FROM nome_da_tabela
    ORDER BY nome_da_coluna DESC; -- DESCENDENTE
```

```sql
    -- Ordena os livros pelo título, de ordem decrescente
    SELECT * FROM livros
    ORDER BY titulo DESC;
```

### Passo 16 - Como limitar o número de resultados de um SELECT

```sql
    -- Imprime apenas 5 itens
    SELECT selecao FROM nome_da_tabela
    LIMIT 5;
```

```sql
    -- Seleciona todos os livros onde o ano de publicação seja maior que 1943 e que esteja disponível, do primeiro ao último, até 3 livros
    SELECT * FROM livros
    WHERE ano_publicacao > 1943 AND disponivel
    ORDER BY ano_publicacao LIMIT 3;
```

### Passo 17 - Como contar o número de registros
Podemos fazer isso utilizando a função de agregação `COUNT(*)`. Ela conta quantos registros existem na nossa tabela que obedecem a tal condição (se houver).

```sql
    -- Conta quantos itens existem na tabela
    SELECT COUNT(nome_da_coluna) FROM nome_da_tabela;
```

```sql
    -- Conta quantos filmes existem na tabela
    SELECT COUNT(*) FROM filme;
```

```sql
    -- Conta quantos filmes de ação existem na tabela
    SELECT COUNT(*) FROM filme WHERE genero = 'Ação';
```

```sql
    -- Conta quantos filmes existem sem contar valores nulos
    SELECT COUNT(nome_da_coluna) FROM filme;
```

### Passo 18 - Como somar balores de uma tabela
Para somar qualquer valor numérico (NUMERICO) podemos usar a função SUM(nome_da_coluna). ELa faz a soma de todos os valores que selecionamos, com ou sem WHERE.

```sql
    SELECT SUM(nome_da_coluna) FROM filme;
```

```sql
    -- Soma toda a coluna bilheteria
    SELECT SUM(bilheteria) FROM filme;
```

```sql
    -- Soma toda a bilheteria dos filmes de 2020 em diante
    SELECT SUM(bilheteria) FROM filme WHERE ano_lancamento >= 2020;
```

### Passo 19 - Como calcular média de valores de uma coluna
Podemos calcular a média NUMÉRICA de valores de uma coluna utilizando a função `AVG(nome_da_coluna)`;

```sql
    -- Calcula a média de todos os valores da coluna exigida
    SELECT AVG(nome_da_coluna) FROM nome_da_tabela;
```

```sql
    -- Calcula a média de bilheteria de todos os filmes
    SELECT AVG(bilheteria) FROM filme;
```

```sql
    -- Calcla a média de bilheteria só dos filmes com a nota igual ou menor que 7.
    SELECT AVG(bilheteria) FROM filme WHERE nota <= 7;
```

### Passo 20 - Como calcular o MENOR valor e o MAIOR valor
Se a gente precisar encontrar o menor e o maior valor dentro de uma coluna, usamos o `MAX(nome_da_coluna)` e o `MIN(nome_da_coluna)`.

```sql
    -- Encontrar o item com o MENOR valor da coluna
    SELECT MIN(nome_da_coluna) FROM nome_da_tabela
```

```sql
    -- Encontrar o filme com a MENOR nota
    SELECT MIN(nota) FROM filme;
```

```sql
    -- Encontrar o item com o MAIOR valor da coluna
    SELECT MAX(nome_da_coluna) FROM nome_da_tabela
```

```sql
    -- Encontrar o filme com a MAIOR nota
    SELECT MAX(nota) FROM filme;
```
