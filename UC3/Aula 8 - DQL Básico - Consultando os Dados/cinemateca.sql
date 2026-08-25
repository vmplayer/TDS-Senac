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
