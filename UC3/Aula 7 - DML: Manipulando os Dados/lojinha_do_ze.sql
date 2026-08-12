CREATE DATABASE IF NOT EXISTS lojinha_do_ze;
USE lojinha_do_ze;

CREATE TABLE IF NOT EXISTS produtos (
	id_produto INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL, 
    categoria VARCHAR(50) NOT NULL,
    preco DECIMAL(10,2) NOT NULL, 
    estoque INT NOT NULL
);

CREATE TABLE IF NOT EXISTS clientes (
	id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(11),
    saldo_fiado DECIMAL(10,2) DEFAULT 0.00
);

CREATE TABLE IF NOT EXISTS vendas (
	id_venda INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    data_venda DATE NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

CREATE TABLE IF NOT EXISTS itens_venda (
	id_item INT PRIMARY KEY AUTO_INCREMENT,
    id_venda INT NOT NULL,
    id_produto INT NOT NULL, 
    quantidade INT NOT NULL,
    FOREIGN KEY (id_venda) REFERENCES vendas(id_venda),
    FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
);

INSERT INTO produtos (nome, categoria, preco, estoque) VALUES 
("Cerveja Lata 350ml", "Bebidas", 4.50, 120),
("Coxinha Congelada", "Salgados", 3.20, 60),
("Refrigerante 2L", "Bebidas", 8.90, 40),
("Pão de Forma", "Padaria", 7.00, 25);

INSERT INTO clientes (nome, telefone, saldo_fiado) VALUES
("Dona Marlene", "51912345678", 45.00),
("Seu Chico", "51987654321", 0.00),
("Leonardo de Souza", "51995866984", 3250.42);

INSERT INTO vendas (id_cliente, data_venda) VALUES (2, "2026-08-12");
INSERT INTO itens_venda (id_venda, id_produto, quantidade) VALUES (1, 1, 2);
INSERT INTO itens_venda (id_venda, id_produto, quantidade) VALUES (1, 2, 1);
