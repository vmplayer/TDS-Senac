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

UPDATE produtos SET estoque = 18 WHERE id_produto = 1;
UPDATE produtos SET preco = 2.25 WHERE id_produto = 2;
UPDATE clientes SET saldo_fiado = 0 WHERE id_cliente = 1;

DELETE FROM produtos WHERE id_produto = 4;

ALTER TABLE produtos ADD COLUMN validade DATE NOT NULL DEFAULT "2027-01-01";
ALTER TABLE clientes RENAME COLUMN telefone TO whatsapp;
ALTER TABLE produtos MODIFY COLUMN categoria VARCHAR(80) NOT NULL;

ALTER TABLE itens_venda ADD CONSTRAINT fk_item_produto FOREIGN KEY (id_produto) REFERENCES produtos(id_produto);

DELETE FROM itens_venda WHERE id_item = 2;
-- DROP TABLE testes_estagiario; -- Essa tabela nem existe, mas ta ai (???)

-- DROP DATABASE lojinha_do_ze; -- NÃO EXECUTAR

-- ------------------------ PARTE DOIS, SEU ZÉ WARS ---------------------------------------------------

UPDATE produtos SET categoria = "Bebidas Alcoolicas" WHERE id_produto = 1;
INSERT INTO produtos (nome, categoria, preco, estoque) VALUES ("Cerveja Importada", "Bebidas Alcoolicas Importadas", 74, 20);

SELECT * FROM produtos WHERE categoria <> "Bebidas Alcoolicas Importadas";
SELECT * FROM produtos WHERE preco > 50;
SELECT * FROM produtos WHERE preco < 10;

-- Adicionando sistema de pontos para os clientes
ALTER TABLE clientes ADD COLUMN pontos INT;
UPDATE clientes SET pontos = 85 WHERE id_cliente = 1;
UPDATE clientes SET pontos = 234 WHERE id_cliente = 2;
UPDATE clientes SET pontos = 2 WHERE id_cliente = 3;

SELECT * FROM clientes WHERE pontos >= 100;
SELECT * FROM clientes WHERE pontos <= 30;

-- Adicionando sistema de categoria favorita para os clientes
ALTER TABLE clientes ADD COLUMN categoria_favorita VARCHAR(80);
UPDATE clientes SET categoria_favorita = "Salgados" WHERE id_cliente = 1;
UPDATE clientes SET categoria_favorita = "Bebidas" WHERE id_cliente = 2;
UPDATE clientes SET categoria_favorita = "Padaria" WHERE id_cliente = 3;

SELECT * FROM clientes WHERE categoria_favorita = "Bebidas" AND pontos > 80;

-- Adicionando sistema de compras na semana para os clientes
ALTER TABLE clientes ADD COLUMN compras_semana INT;
UPDATE clientes SET compras_semana = 20 WHERE id_cliente = 1;
UPDATE clientes SET compras_semana = 42 WHERE id_cliente = 2;
UPDATE clientes SET compras_semana = 2 WHERE id_cliente = 3;

SELECT * FROM clientes WHERE pontos >= 90 OR compras_semana > 5;

SELECT * FROM produtos WHERE NOT categoria = "Bebidas Alcoolicas Importadas";

SELECT * FROM clientes WHERE pontos BETWEEN 50 AND 90;

SELECT * FROM produtos WHERE categoria IN ('Bebidas', 'Salgados', 'Padaria');

-- Criando os prêmios
CREATE TABLE IF NOT EXISTS premios (
    id_premio INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);
INSERT INTO premios (nome) VALUES
("Viagem para Osasco"),
("Banheira Espacial"),
("Sabre de luz"),
("Kit Jogo de Panelas");

SELECT * FROM premios WHERE nome LIKE 'Kit%';

SELECT * FROM premios WHERE nome LIKE '%Espacial';

-- Adicionando a Arlene ao sistema
INSERT INTO clientes (nome, whatsapp, saldo_fiado, pontos, categoria_favorita, compras_semana) VALUES 
("Arlene", "51993421242", 0.00, 42, "Bebidas Alcoolicas", 11);

SELECT * FROM clientes WHERE nome LIKE '%Arlene%';

-- Adicionando o ano de cadastro para os clientes
ALTER TABLE clientes ADD COLUMN ano_cadastro INT;
UPDATE clientes SET ano_cadastro = 2010 WHERE id_cliente = 1;
UPDATE clientes SET ano_cadastro = 1992 WHERE id_cliente = 2;
UPDATE clientes SET ano_cadastro = 2004 WHERE id_cliente = 3;
UPDATE clientes SET ano_cadastro = 2026 WHERE id_cliente = 4;
INSERT INTO clientes (nome, whatsapp, saldo_fiado, pontos, categoria_favorita, compras_semana, ano_cadastro) VALUES 
("Cristóvão Colombo", "51993422142", 0.00, 199, "Bebidas Alcoolicas", 0, 1984);

SELECT * FROM clientes WHERE ano_cadastro LIKE '198_';
