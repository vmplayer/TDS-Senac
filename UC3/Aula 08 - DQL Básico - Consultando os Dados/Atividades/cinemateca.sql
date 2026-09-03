CREATE DATABASE cinemateca;

USE cinemateca;

CREATE TABLE filme (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    diretor VARCHAR(100) NOT NULL,
    genero VARCHAR(50) NOT NULL,
    ano_lancamento INT NOT NULL,
    pais VARCHAR(60) NOT NULL,
    duracao_minutos INT NOT NULL,
    nota DECIMAL(3,1) NOT NULL,
    bilheteria DECIMAL(15,2),
    oscar INT DEFAULT 0
);

SELECT titulo, ano_lancamento FROM filme
ORDER BY ano_lancamento DESC LIMIT 10;

SELECT titulo, ano_lancamento FROM filme 
ORDER BY ano_lancamento ASC LIMIT 10;

SELECT titulo, genero, nota FROM filme 
WHERE genero = 'Terror' 
ORDER BY nota DESC LIMIT 5;

SELECT titulo, genero, nota, ano_lancamento FROM filme 
WHERE nota >= 7 AND ano_lancamento >= 2015 
ORDER BY nota DESC LIMIT 10;

SELECT titulo, genero, nota, duracao_minutos FROM filme 
WHERE nota >= 7 AND duracao_minutos BETWEEN 80 AND 120 
ORDER BY nota DESC LIMIT 10;

SELECT titulo, genero, nota, ano_lancamento FROM filme 
WHERE genero IN ('Acao', 'Aventura', 'Ficção Científica') 
ORDER BY nota DESC, ano_lancamento DESC LIMIT 10;

SELECT titulo, genero, nota, ano_lancamento, duracao_minutos FROM filme 
WHERE ano_lancamento >= 2010 AND nota >= 7.5 AND duracao_minutos <= 150 AND genero IN ('Acao', 'Aventura', 'Ficcao Cientifica') 
ORDER BY nota DESC, ano_lancamento DESC LIMIT 5;

-- Conta quantos filmes existem na lista
SELECT COUNT(*) AS numero_de_filmes FROM filme;

-- Mostra quantos filmes são de ação
SELECT COUNT(*) AS numero_de_filmes_de_acao FROM filme WHERE genero = 'Ação';

INSERT INTO filme (titulo, diretor, genero, ano_lancamento, pais, duracao_minutos, nota, oscar) VALUES (
    "Xablau e a Preda Filosofal", "Steven Xablau", "Aventura", 2000, "Afeganistão", 899, 10, 9
);

SELECT COUNT(bilheteria) FROM filme;

SELECT SUM(bilheteria) FROM filme;

SELECT SUM(bilheteria) FROM filme WHERE ano_lancamento >= 2020;

SELECT AVG(bilheteria) AS Media FROM filme WHERE nota <= 7;

SELECT * FROM filme WHERE nota <= 7;

-- Em uma única consulta (um único SELECT), me mostre quantos filmes tem no total, qual a média das notas, qual a nota máxima e qual a nota mínima. Usem apelidos para as colunas.
SELECT COUNT(*) AS quantidade_de_filmes, AVG(nota) AS media_de_nota, MAX(nota) AS nota_maxima, MIN(nota) AS nota_minima FROM filme;
