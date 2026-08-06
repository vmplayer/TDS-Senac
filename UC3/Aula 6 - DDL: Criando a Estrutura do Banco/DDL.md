# DDL - Como começar a trabalhar com o banco usando comandos

## DDL significa `Data Definition Language`, que em português significa `Linguagem de Definição de Dados`, ou seja, são os comandos que CRIAM o nosso banco.

### Passo 1 - Entrando no Workbench

Primeiro, antes de tudo, abra o MySQL Workbench. É nele que vamos inserir os nossos comandos.

Em MySQL Connections, clique em **Local Instance** e digite a senha (a senha padrão é `root`).

### Passo 2 - Criando um novo banco

Para criar um novo banco de dados, você deve usar o comando `CREATE DATABASE nome_do_banco;`.

> NÃO ESQUEÇA: O PONTO E VÍRGULA NO FINAL (;) É OBRIGATÓRIO

Para rodar o comando, selecione toda a linha que você digitou e aperte `CTRL` + `ENTER`. Ou selecione o botão com o símbolo de um raio.

Você saberá que o comando foi executado com sucesso se aparecer uma mensagem com uma verificação em verde (✅).

Para ver o banco criado, procure pelo símbolo que é um círculo feito por duas setas, lembrando um recarregamento. Clique nele e ele atualiza a visualização dos bancos.

> Para fazer comentários, usamos `-- Seu comentário aqui`.

### Passo 3 - Criando as nossas tabelas
Agora que já criamos um novo banco, precisamos criar as tabelas dentro dele. Para isso, precisamos primeiro informar ao Workbench qual banco vamos trabalhar, pois podem haver vários.

Você pode fazer isso clicando duas vezes rapidamente no nome do banco até ele ficar em **negrito** ou colocar, na primeira linha dos seus comandos isto aqui: `USE nome_do_banco;`, que indica qual banco está sendo usado.

Para criarmos uma tabela, usamos o comando 
```SQL
CREATE TABLE IF NOT EXISTS bicicletas(
    -- Cria uma coluna chamada 'id_bicicleta'
    -- O TIPO dela é INT (pois é um número inteiro)
    -- Ela é a CHAVE PRIMÁRIA desta tabela, por isso o PRIMARY KEY.
    -- Ela vai ser criada automaticamente pelo banco, por isso o AUTO_INCREMENT.
    id_bicicletas INT PRIMARY KEY AUTO_INCREMENT
    modelo VARCHAR(50) NOT NULL
    preco DECIMAL(10,2) NOT NULL
)
```
. Isso se traduz para *criar tabela chamada nome_da_tabela se ela já não existir*.


### Passo 4 - Adicionando uma chave estrangeira

```SQL
CREATE TABLE IF NOT EXISTS itens_vendas (
	id_itens_venda INT PRIMARY KEY AUTO_INCREMENT,
    id_venda INT NOT NULL,
    id_bicicleta INT NOT NULL,
    quantidade INT NOT NULL DEFAULT 1,
    FOREIGN KEY (id_venda) REFERENCES vendas(id_venda),
    FOREIGN KEY (id_bicicleta) REFERENCES bicicletas(id_bicicleta)
);
```

### Passo 5 - Como alterar tabelas já criadas

Pense só, criamos nossas tabelas mas aí vem o pensamgento: "Puts! Os clientes devem ter CPF, mas eu não criei essa coluna. E agora?". Calma, gafanhoto, tem solução, e ela se chamaa `ALTER TABLE`. Este comando nos permite alterar nossas tabelas. Podemos trocar o nome, criar colunas novas e outras coisas.

#### Adicionar e criar uma tabela nova
```SQL
    ALTER TABLE nome_da_tabela ADD COLUMN nome_da_coluna TIPO;
```

```SQL
    ALTER TABLE clientes ADD COLUMN cpf VARCHAR(11) NOT NULL UNIQUE;
```

#### Alterar e mudar o tipo e/ou o tamanho de uma coluna
```SQL
    ALTER TABLE nome_da_tabela MODIFY COLUMN nome_da_coluna TIPO;
```

```SQL
    ALTER TABLE clientes MODIFY COLUMN nome VARCHAR(150);
```

#### Alterar e renomear uma tabela
```SQL
    ALTER TABLE nome_da_tabela RENAME TO nome_novo;
```

```SQL
    ALTER TABLE itens_vendas RENAME TO itens;
```

#### Alterar e renomear uma coluna
```SQL
    ALTER TABLE nome_da_tabela RENAME COLUMN nome_antigo TO nome_novo;
```

```SQL
    ALTER TABLE itens_vendas RENAME COLUMN quantidade TO qtd;
```

#### Alterar e remover uma coluna
```SQL
    ALTER TABLE nome_da_tabela RENAME COLUMN nome_da_coluna;
```

```SQL
    ALTER TABLE clientes DROP COLUMN cpf;
```

#### Alterar e adicionar chaves estrangeiras (foreign keys)
```SQL
    ALTER TABLE nome_da_tabela ADD CONSTRAINT nome_da_fk FOREIGN KEY (nome_da_coluna_fk) REFERENCES nome_da_tabela_referenciada(nome_da_coluna_referenciada);
```

```SQL
    ALTER TABLE itens_vendas ADD CONSTRAINT fk_vendas FOREIGN KEY (id_venda) REFERENCES vendas(id_venda);
```

### Passo 6 - Mandando as tabelas de arrasta

Como que fazemos para apagar nossas tabelas? Se criarmos uma tabela que não vamos mais precisar, temos que ter um jeito de mandar ela pro vinagre.

> PRECISAMOS TER CUIDADO, POIS ESTE COMANDO É **IRREVERSÍVEL**!

#### Apagar uma tabela inteira
```SQL
    DROP TABLE IF EXISTS nome_da_tabela;
```

```SQL
    DROP TABLE IF EXISTS itens;
```

#### Apagar um banco de dados inteiro
```SQL
    DROP DATABASE IF EXISTS nome_do_bando_de_dados;
```

```SQL
    DROP DATABASE IF EXISTS loja_bicicletas;
```
