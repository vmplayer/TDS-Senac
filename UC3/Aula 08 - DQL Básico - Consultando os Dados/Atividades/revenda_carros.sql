CREATE DATABASE IF NOT EXISTS revenda_carros;
USE revenda_carros;

CREATE TABLE IF NOT EXISTS carros (
	id_carro INT PRIMARY KEY AUTO_INCREMENT,
    modelo VARCHAR(50) NOT NULL,
    marca VARCHAR(50) NOT NULL,
    cor VARCHAR(50) NOT NULL
);

INSERT INTO carros (modelo, marca, cor) VALUES 
("Onix", "Chevrolet", "Branco"),
("Tracker", "Chevrolet", "Branco"),
("Spin", "Chevrolet", "Branco"),
("Uno", "Fiat", "Branco"),
("Mobi", "Fiat", "Branco"),
("LaFerrari", "Ferrari", "Branco"),
("Impala", "Chevrolet", "Vermelho"),
("Fastback", "Fiat", "Vermelho"),
("Argo", "Fiat", "Vermelho"),
("SF90 Stradale", "Ferrari", "Vermelho");

SELECT * FROM carros;

SELECT modelo, marca FROM carros;

SELECT * FROM carros WHERE marca = "Ferrari";

SELECT marca AS Marca_Do_Carro, cor AS Cor_Do_Carro FROM carros WHERE cor = "Vermelho";
