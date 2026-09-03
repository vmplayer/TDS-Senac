CREATE TABLE IF NOT EXISTS livros (
	id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(150) NOT NULL,
    autor VARCHAR(100),
	genero VARCHAR(50),
    preco DECIMAL(10,2),
    ano_publicacao INT,
    disponivel BOOLEAN
);

INSERT INTO livros (titulo, autor, genero, preco, ano_publicacao, disponivel) VALUES
('Dom Casmurro', 'Machado de Assis', 'Romance', 29.90, 1899, TRUE),
('O Alquimista', 'Paulo Coelho', 'Ficção', 39.90, 1988, FALSE),
('1984', 'George Orwell', 'Distopia', 34.50, 1949, TRUE),
('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 'Infantil', 19.90, 1943, TRUE),
('Sapiens: Uma Breve História da Humanidade', 'Yuval Noah Harari', 'História', 59.90, 2011, FALSE),
('O Hobbit', 'J.R.R. Tolkien', 'Fantasia', 45.00, 1937, TRUE),
('A Garota no Trem', 'Paula Hawkins', 'Suspense', 27.80, 2015, TRUE),
('Pai Rico, Pai Pobre', 'Robert Kiyosaki', 'Finanças', 42.00, 1997, TRUE),
('Cem Anos de Solidão', 'Gabriel García Márquez', 'Realismo Mágico', 49.90, 1967, FALSE),
('Duna', 'Frank Herbert', 'Ficção Científica', 54.90, 1965, TRUE);

-- Geral
SELECT * FROM livros;

-- Igual
SELECT * FROM livros
WHERE genero = "Fantasia";

-- Diferente
SELECT * FROM livros
WHERE genero <> "Fantasia";

-- Maior que
SELECT * FROM livros
WHERE preco > 50;

-- Menor que
SELECT * FROM livros
WHERE preco < 50;

-- Maior ou igual
SELECT * FROM livros
WHERE ano_publicacao >= 2000;

-- Menor ou igual
SELECT * FROM livros
WHERE ano_publicacao <= 2000;

-- AND, OR e NOT

-- AND [E / &&]
SELECT * FROM livros
WHERE genero = "Fantasia" AND preco < 60;

-- OR [OU / ||]
SELECT * FROM livros
WHERE genero = "Fantasia" OR genero = "Distopia";

-- NOT [NÃO / !]
SELECT * FROM livros
WHERE NOT genero = "Fantasia";

-- BETWEEN
SELECT * FROM livros
WHERE preco BETWEEN 20 AND 50;

-- IN
SELECT * FROM livros
WHERE genero IN ("Fantasia", "Distopia");

-- LIKE [COMO]
SELECT * FROM livros
WHERE titulo LIKE 'O%';
