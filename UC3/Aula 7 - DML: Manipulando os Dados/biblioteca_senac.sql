CREATE DATABASE IF NOT EXISTS biblioteca_senac;
USE biblioteca_senac;

CREATE TABLE IF NOT EXISTS livros (
	id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(50) NOT NULL,
    autor VARCHAR(100) NOT NULL,
	data_lancamento DATE
);

-- INSERE UM DADO NOVO NA TABELA ESCOLHIDA:
INSERT INTO livros (titulo, autor, data_lancamento) VALUES (
	"O Diário de Anne Frank", "Anne Frank", "1947-06-25"
);

INSERT INTO livros (titulo, autor, data_lancamento) VALUES (
	"O Mágico de Oz", "L. Frank Baum", "1900-05-19"
);

INSERT INTO livros (titulo, autor, data_lancamento) VALUES
("Livro 1", "Autor A", "2000-10-10"),
("Livro 2", "Autor B", "1999-10-10"),
("Livro 3", "Autor C", "1998-10-10");

INSERT INTO livros (titulo, autor) VALUES (
	"Planeta do Xablau", "Dr. Xablau Lee"
);

UPDATE livros SET titulo = "O Inferno de Xablau" WHERE id = 7;
