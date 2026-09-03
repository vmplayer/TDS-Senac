CREATE DATABASE loja_inner_join;

USE loja_inner_join;

CREATE TABLE cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cidade VARCHAR(80) NOT NULL,
    estado CHAR(2) NOT NULL
);

CREATE TABLE vendedor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    setor VARCHAR(50) NOT NULL
);

CREATE TABLE categoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(80) NOT NULL
);

CREATE TABLE produto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    estoque INT NOT NULL,
    categoria_id INT NOT NULL,

    FOREIGN KEY (categoria_id)
        REFERENCES categoria(id)
);

CREATE TABLE pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    vendedor_id INT NOT NULL,
    data_pedido DATE NOT NULL,
    status VARCHAR(30) NOT NULL,

    FOREIGN KEY (cliente_id)
        REFERENCES cliente(id),

    FOREIGN KEY (vendedor_id)
        REFERENCES vendedor(id)
);

CREATE TABLE item_pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT NOT NULL,
    produto_id INT NOT NULL,
    quantidade INT NOT NULL,

    FOREIGN KEY (pedido_id)
        REFERENCES pedido(id),

    FOREIGN KEY (produto_id)
        REFERENCES produto(id)
);

INSERT INTO cliente (nome, cidade, estado) VALUES
('Ana Souza', 'Porto Alegre', 'RS'),
('Bruno Lima', 'São Leopoldo', 'RS'),
('Carla Mendes', 'Novo Hamburgo', 'RS'),
('Diego Alves', 'Canoas', 'RS'),
('Eduarda Martins', 'Florianópolis', 'SC'),
('Felipe Rocha', 'Curitiba', 'PR'),
('Gabriela Silva', 'Porto Alegre', 'RS'),
('Henrique Costa', 'São Paulo', 'SP'),
('Isabela Ferreira', 'Caxias do Sul', 'RS'),
('João Oliveira', 'Blumenau', 'SC'),
('Karen Rodrigues', 'Novo Hamburgo', 'RS'),
('Lucas Pereira', 'Canoas', 'RS');

INSERT INTO vendedor (nome, setor) VALUES
('Marcos Silva', 'Informática'),
('Juliana Alves', 'Eletrônicos'),
('Roberto Santos', 'Casa'),
('Patrícia Gomes', 'Games'),
('Fernando Lima', 'Geral');

INSERT INTO categoria (nome) VALUES
('Computadores'),
('Periféricos'),
('Celulares'),
('Games'),
('Casa Inteligente'),
('Áudio');

INSERT INTO produto (nome, preco, estoque, categoria_id) VALUES
('Notebook Lenovo', 3499.90, 15, 1),
('Notebook Acer', 2899.90, 8, 1),
('Monitor 24 Polegadas', 899.90, 20, 2),
('Mouse Logitech', 129.90, 50, 2),
('Teclado Mecânico', 299.90, 30, 2),
('Galaxy S25', 4999.90, 12, 3),
('iPhone 16', 6999.90, 10, 3),
('Controle Xbox', 449.90, 25, 4),
('PlayStation 5', 3999.90, 7, 4),
('Nintendo Switch', 2199.90, 11, 4),
('Lâmpada Inteligente', 89.90, 40, 5),
('Echo Dot', 399.90, 18, 5),
('Fone Bluetooth JBL', 349.90, 35, 6),
('Caixa de Som JBL', 599.90, 16, 6),
('Headset Gamer', 279.90, 22, 6);

INSERT INTO pedido (cliente_id, vendedor_id, data_pedido, status) VALUES
(1, 1, '2026-08-01', 'Entregue'),
(2, 4, '2026-08-02', 'Entregue'),
(3, 2, '2026-08-03', 'Enviado'),
(1, 2, '2026-08-05', 'Entregue'),
(4, 3, '2026-08-06', 'Cancelado'),
(5, 1, '2026-08-07', 'Entregue'),
(6, 4, '2026-08-08', 'Enviado'),
(7, 5, '2026-08-10', 'Entregue'),
(8, 2, '2026-08-11', 'Processando'),
(9, 1, '2026-08-12', 'Entregue'),
(10, 3, '2026-08-14', 'Enviado'),
(2, 1, '2026-08-15', 'Entregue'),
(11, 4, '2026-08-17', 'Processando'),
(12, 5, '2026-08-18', 'Entregue'),
(3, 1, '2026-08-20', 'Entregue'),
(7, 4, '2026-08-22', 'Enviado'),
(1, 5, '2026-08-24', 'Processando'),
(9, 2, '2026-08-25', 'Entregue');

INSERT INTO item_pedido (pedido_id, produto_id, quantidade) VALUES
(1, 1, 1),
(1, 4, 2),
(2, 9, 1),
(2, 8, 2),
(3, 6, 1),
(3, 13, 1),
(4, 7, 1),
(5, 11, 3),
(6, 2, 1),
(6, 5, 1),
(7, 10, 1),
(7, 8, 1),
(8, 12, 2),
(8, 11, 4),
(9, 7, 1),
(9, 13, 2),
(10, 3, 2),
(10, 4, 1),
(11, 12, 1),
(11, 14, 1),
(12, 1, 1),
(12, 3, 1),
(12, 5, 1),
(13, 9, 1),
(13, 15, 1),
(14, 14, 2),
(15, 2, 1),
(15, 4, 1),
(15, 13, 1),
(16, 10, 1),
(16, 15, 2),
(17, 6, 1),
(17, 12, 1),
(18, 3, 1),
(18, 5, 1);

-- EXERCÍCIOS DAQUI PARA BAIXO --

-- 1. Clientes e pedidos
SELECT p.id, c.nome, p.data_pedido, p.status
FROM pedido AS p
INNER JOIN cliente AS c ON p.cliente_id = c.id
ORDER BY p.id;

-- 2. Produtos e categorias
SELECT p.nome, p.preco, c.nome
FROM produto AS p
INNER JOIN categoria AS c ON p.categoria_id = c.id
ORDER BY p.id;

-- 3. Pedidos e vendedores
SELECT p.id, v.nome, v.setor, p.data_pedido
FROM pedido AS p
INNER JOIN vendedor AS v ON p.vendedor_id = v.id
ORDER BY p.id;

-- 4. Itens e produtos
SELECT i.id, p.nome, i.quantidade
FROM item_pedido AS i
INNER JOIN produto AS p ON i.produto_id = p.id
ORDER BY i.id;

SELECT * FROM produto;

-- 5. Cliente responsável por cada produto comprado
SELECT 
    c.nome, 
    p.id AS numero_pedido, 
    i.produto_id AS numero_produto, 
    i.quantidade
FROM pedido AS p
INNER JOIN cliente AS c ON p.cliente_id = c.id
INNER JOIN item_pedido AS i ON p.id = i.pedido_id
ORDER BY c.nome;

-- 6. Produtos existentes em cada pedido
SELECT 
    pe.id AS numero_pedido, 
    pr.nome, 
    i.quantidade
FROM item_pedido AS i
INNER JOIN pedido AS pe ON i.pedido_id = pe.id
INNER JOIN produto AS pr ON i.produto_id = pr.id
ORDER BY pe.id;

-- 7. Clientes e vendedores
SELECT 
    c.nome AS nome_cliente, 
    v.nome AS nome_vendedor, 
    p.id AS numero_pedido, 
    p.data_pedido
FROM pedido AS p
INNER JOIN cliente AS c ON p.cliente_id = c.id
INNER JOIN vendedor AS v ON p.vendedor_id = v.id
ORDER BY p.id;

-- 8. Produto e sua categoria
SELECT 
    p.nome AS nome_produto,
    c.nome AS categoria, 
    i.quantidade 
FROM produto AS p
INNER JOIN categoria AS c ON p.categoria_id = c.id
INNER JOIN item_pedido AS i ON p.id = i.produto_id
ORDER BY c.nome;

-- 9. Histórico de compras
SELECT 
    c.nome AS cliente,
    p.id AS numero_pedido,
    pr.nome AS produto,
    i.quantidade,
    pr.preco
FROM pedido AS p
INNER JOIN item_pedido AS i ON p.id = i.pedido_id
INNER JOIN cliente AS c ON p.cliente_id = c.id
INNER JOIN produto AS pr ON i.produto_id = pr.id
ORDER BY c.nome;

-- 10. Histórico de vendas por vendedor
SELECT
    v.nome AS vendedor,
    p.id AS numero_pedido,
    pr.nome AS produto,
    i.quantidade
FROM pedido AS p
INNER JOIN vendedor AS v ON p.vendedor_id = v.id
INNER JOIN item_pedido AS i ON p.id = i.pedido_id
INNER JOIN produto AS pr on i.produto_id = pr.id
ORDER BY v.nome;

-- 11. Produtos comprados por clientes do Rio Grande do Sul
SELECT 
    c.nome AS cliente,
    c.cidade,
    pr.nome AS produto,
    i.quantidade
FROM pedido AS p
INNER JOIN cliente AS c ON p.cliente_id = c.id
INNER JOIN item_pedido AS i ON p.id = i.pedido_id
INNER JOIN produto AS pr ON i.produto_id = pr.id
WHERE c.estado = "RS"
ORDER BY c.nome;

-- 12. Pedidos entregues
SELECT
    pe.id AS numero_pedido,
    c.nome AS cliente,
    pr.nome AS produto,
    i.quantidade
FROM pedido AS pe
INNER JOIN cliente AS c ON pe.cliente_id = c.id
INNER JOIN item_pedido AS i ON pe.id = i.pedido_id
INNER JOIN produto AS pr ON i.produto_id = pr.id
WHERE pe.status = "Entregue"
ORDER BY pe.id;

SELECT * FROM produto;

-- 13. Relatório completo de vendas
SELECT 
    cl.nome AS cliente,
    pe.id AS numero_pedido,
    pe.data_pedido,
    pr.nome AS produto,
    ct.nome AS categoria,
    i.quantidade,
    pr.preco
FROM item_pedido AS i
INNER JOIN pedido AS pe ON i.pedido_id = pe.id
INNER JOIN cliente AS cl ON pe.cliente_id = cl.id
INNER JOIN produto AS pr ON i.produto_id = pr.id
INNER JOIN categoria AS ct ON pr.categoria_id = ct.id
ORDER BY cl.nome;

-- 14. Produtos da categoria Games
SELECT 
    c.nome AS cliente,
    pr.nome AS produto,
    i.quantidade,
    p.data_pedido
FROM pedido AS p
INNER JOIN cliente AS c ON p.cliente_id = c.id
INNER JOIN item_pedido AS i ON p.id = i.pedido_id
INNER JOIN produto AS pr ON i.produto_id = pr.id
INNER JOIN categoria AS ct ON pr.categoria_id = ct.id
WHERE ct.nome = "Games"
ORDER BY c.nome;

-- 15. Compras de computadores
SELECT 
    cl.nome AS cliente,
    cl.cidade,
    pr.nome AS produto,
    pr.preco,
    pe.data_pedido
FROM item_pedido AS i
INNER JOIN produto AS pr ON i.produto_id = pr.id
INNER JOIN pedido AS pe ON i.pedido_id = pe.id
INNER JOIN cliente AS cl ON pe.cliente_id = cl.id
INNER JOIN categoria AS ct ON pr.categoria_id = ct.id
WHERE ct.nome = "Computadores"
ORDER BY cl.nome;

-- 16. Valor de cada item comprado
SELECT 
    pe.id AS numero_pedido,
    pr.nome AS produto,
    pr.preco,
    i.quantidade,
    (pr.preco * i.quantidade) AS valor_item
FROM item_pedido AS i
INNER JOIN pedido AS pe ON i.pedido_id = pe.id
INNER JOIN produto AS pr ON i.produto_id = pr.id
ORDER BY pe.id;

-- 17. Valor dos itens comprados por cada cliente
SELECT 
    c.nome AS cliente,
    pr.nome AS produto,
    i.quantidade,
    pr.preco,
    (pr.preco * i.quantidade) AS valor_item
FROM item_pedido AS i
INNER JOIN produto AS pr ON i.produto_id = pr.id
INNER JOIN pedido AS pe ON i.pedido_id = pe.id
INNER JOIN cliente AS c ON pe.cliente_id = c.id
ORDER BY c.nome;

-- 18. Compras acima de R$1.000
SELECT 
    c.nome AS cliente,
    pr.nome AS produto,
    i.quantidade,
    (pr.preco * i.quantidade) AS valor_item
FROM item_pedido AS i
INNER JOIN produto AS pr ON i.produto_id = pr.id
INNER JOIN pedido AS pe ON i.pedido_id = pe.id
INNER JOIN cliente AS c ON pe.cliente_id = c.id
WHERE (pr.preco * i.quantidade) > 1000
ORDER BY valor_item ASC;

-- 19. Compras feitas pelo vendedor Marcos Silva
SELECT 
    c.nome AS cliente,
    pr.nome AS produto,
    i.quantidade,
    pe.data_pedido
FROM pedido AS pe
INNER JOIN item_pedido AS i ON pe.id = i.pedido_id
INNER JOIN produto AS pr ON i.produto_id = pr.id
INNER JOIN vendedor AS v ON pe.vendedor_id = v.id
INNER JOIN cliente AS c ON pe.cliente_id = c.id
WHERE v.nome = "Marcos Silva"
ORDER BY pr.preco ASC;

-- 20. Celulares vendidos
SELECT 
    cl.nome AS cliente,
    v.nome AS vendedor,
    pr.nome AS produto,
    i.quantidade,
    pe.status
FROM pedido AS pe
INNER JOIN cliente AS cl ON pe.cliente_id = cl.id
INNER JOIN vendedor AS v ON pe.vendedor_id = v.id
INNER JOIN item_pedido AS i ON pe.id = i.pedido_id
INNER JOIN produto AS pr ON i.produto_id = pr.id
INNER JOIN categoria AS ct ON pr.categoria_id = ct.id
WHERE ct.nome = "Celulares"
ORDER BY cl.nome ASC;

-- 21. Relatório detalhado
SELECT 
    pe.id AS numero_pedido,
    pe.data_pedido,
    cl.nome AS cliente,
    cl.cidade,
    v.nome AS vendedor,
    v.setor,
    pr.nome AS produto,
    ct.nome AS categoria,
    pr.preco,
    i.quantidade,
    (pr.preco * i.quantidade) AS valor_total,
    pe.status
FROM pedido AS pe
INNER JOIN cliente AS cl ON pe.cliente_id = cl.id
INNER JOIN vendedor AS v ON pe.vendedor_id = v.id
INNER JOIN item_pedido AS i ON pe.id = i.pedido_id
INNER JOIN produto AS pr ON i.produto_id = pr.id
INNER JOIN categoria AS ct ON pr.categoria_id = ct.id
ORDER BY pe.data_pedido DESC;
