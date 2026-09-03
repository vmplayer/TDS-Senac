CREATE DATABASE IF NOT EXISTS guilda_aventureiros;
USE guilda_aventureiros;

CREATE TABLE IF NOT EXISTS aventureiros (
	id_aventureiro INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    classe VARCHAR(50) NOT NULL,
    nivel INT
);

CREATE TABLE IF NOT EXISTS missoes (
	id_missao INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(70) NOT NULL,
    recompensa DECIMAL(10,2) NOT NULL,
    dificuldade ENUM('Facil', 'Medio', 'Dificil') NOT NULL
);

CREATE TABLE IF NOT EXISTS aventuras (
	id_aventura INT PRIMARY KEY AUTO_INCREMENT,
    id_aventureiro INT NOT NULL,
    id_missao INT NOT NULL,
    FOREIGN KEY (id_aventureiro) REFERENCES aventureiros(id_aventureiro),
    FOREIGN KEY (id_missao) REFERENCES missoes(id_missao)
);

ALTER TABLE aventureiros ADD COLUMN mana INT NOT NULL;
ALTER TABLE aventureiros MODIFY COLUMN classe VARCHAR(100) NOT NULL;
ALTER TABLE missoes RENAME COLUMN recompensa TO recompensa_moedas;

CREATE TABLE IF NOT EXISTS monstros (
	id_monstro INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    vida INT NOT NULL,
    nivel INT NOT NULL
);

CREATE TABLE IF NOT EXISTS monstros_derrotados (
	id_derrota INT PRIMARY KEY AUTO_INCREMENT,
    id_aventureiro INT NOT NULL,
    id_monstro INT NOT NULL,
    FOREIGN KEY (id_aventureiro) REFERENCES aventureiros(id_aventureiro),
    FOREIGN KEY (id_monstro) REFERENCES monstros(id_monstro)
);

ALTER TABLE monstros_derrotados ADD CONSTRAINT fk_monstro FOREIGN KEY (id_monstro) REFERENCES monstros(id_monstro);
ALTER TABLE aventureiros DROP COLUMN mana;
ALTER TABLE aventuras RENAME TO participacoes_missoes;

DROP TABLE monstros_derrotados;
DROP DATABASE guilda_aventureiros;
