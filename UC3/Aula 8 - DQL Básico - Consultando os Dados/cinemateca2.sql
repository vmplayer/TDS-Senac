USE cinemateca;

SELECT genero, AVG(nota) AS media_nota
FROM filme
GROUP BY genero;

SELECT genero, COUNT(*) AS quantidade FROM filme
WHERE genero <> "Ficcao Cientifica"
GROUP BY genero
HAVING quantidade >= 10;

SELECT genero, AVG(nota) AS media_nota
FROM filme
GROUP BY genero
HAVING media_nota >= 8.5 ORDER BY media_nota DESC; -- Coloquei 8.5 pois todos os generos tem nota maior ou igual à 8

SELECT pais, COUNT(*) AS numero_filmes
FROM filme GROUP BY pais
HAVING numero_filmes >= 5 ORDER BY numero_filmes DESC;

-- Quero que me retornem apenas o diretor com mais Oscars
SELECT diretor, SUM(oscar) AS total_oscar 
FROM filme
GROUP BY diretor 
ORDER BY total_oscar DESC
LIMIT 1;

-- 3 generos com maior média de nota, mas apenas generos que possuam pelo menos 5 filmes cadastrados
-- Precisa mostrar o genero, quantidade de filmes e média das notas
-- Os resultados devem ser da menor média para a maior, e somente os 3 primeiros.

SELECT genero, COUNT(*) AS qtd_filme, AVG(nota) AS media_nota
FROM filme GROUP BY genero HAVING qtd_filme >= 5
ORDER BY qtd_filme DESC LIMIT 3; 
