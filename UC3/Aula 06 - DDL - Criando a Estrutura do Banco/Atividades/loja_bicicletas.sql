CREATE DATABASE IF NOT EXISTS loja_bicicletas;
USE loja_bicicletas;

CREATE TABLE IF NOT EXISTS bicicletas (
	id_bicicleta INT PRIMARY KEY AUTO_INCREMENT,
    modelo VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL
);

CREATE TABLE IF NOT EXISTS clientes (
	id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(11),
    endereco VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS vendas (
	id_venda INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

CREATE TABLE IF NOT EXISTS itens_vendas (
	id_itens_venda INT PRIMARY KEY AUTO_INCREMENT,
    id_venda INT NOT NULL,
    id_bicicleta INT NOT NULL,
    quantidade INT NOT NULL DEFAULT 1,
    FOREIGN KEY (id_venda) REFERENCES vendas(id_venda),
    FOREIGN KEY (id_bicicleta) REFERENCES bicicletas(id_bicicleta)
);

ALTER TABLE clientes ADD COLUMN cpf VARCHAR(11) NOT NULL UNIQUE;
ALTER TABLE clientes MODIFY COLUMN nome VARCHAR(150);
ALTER TABLE itens_vendas RENAME COLUMN quantidade TO qtd;
ALTER TABLE clientes DROP COLUMN cpf;
