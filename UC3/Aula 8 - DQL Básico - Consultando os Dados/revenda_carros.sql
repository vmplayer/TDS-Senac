CREATE DATABASE IF NOT EXISTS revenda_carros;
USE revenda_carros;

CREATE TABLE IF NOT EXISTS carros (
	id_carro INT PRIMARY KEY AUTO_INCREMENT,
    modelo VARCHAR(50) NOT NULL,
    cor VARCHAR(50) NOT NULL,
    marca VARCHAR(50) NOT NULL
);

INSERT INTO carros (modelo, cor, marca) VALUES 
("Chevrolet", "Prata", "Onix"),
("Volkswagen", "Branco", "Gol"),
("Fiat", "Vermelho", "Palio"),
("Toyota", "Preto", "Corolla"),
("Honda", "Cinza", "Civic"),
("Hyundai", "Azul", "HB20"),
("Ford", "Azul", "Ka"),
("Renault", "Prata", "Sandero"),
("Jeep", "Verde", "Renegade"),
("Nissan", "Branco", "Kicks");
