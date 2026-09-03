-- Contar quantos livros estão disponíveis
-- Qual a média de preço dos livros de Fantasia
-- Qual o valor máximo dos livros entre 2000 e 2020
-- Qual o valor mínimo dos livros de um mesmo escritor
-- Qual o valor total dos livros

USE biblioteca_senac;

SELECT * FROM livros;

SELECT COUNT(*) FROM livros WHERE disponivel >= 1; -- 7

SELECT AVG(preco) FROM livros WHERE genero = "Fantasia"; -- 45.000000

SELECT MAX(preco) FROM livros WHERE ano_publicacao >= 2000 AND ano_publicacao <= 2020; -- 59.90

SELECT MIN(preco) FROM livros WHERE autor = "J.R.R. Tolkien"; -- 45.00

SELECT SUM(preco) FROM livros; -- 403.70
