--1
SELECT
  UCASE('trybe') AS UCASE;

--2
SELECT
  REPLACE(
    'Você já ouviu falar do DuckDuckGo?',
    'DuckDuckGo',
    'Google'
  ) AS STR_REPLACE;

--3
SELECT
  LENGTH('Uma frase qualquer') AS STR_LENGTH;

--4
SELECT
  SUBSTRING(
    'A linguagem JavaScript está entre as mais usadas',
    13,
    10
  ) AS STR_SUBSTRING;

--5
SELECT
  LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL') AS LCASE;

--1
SELECT
  film_id,
  title,
  IF(
    title = 'ACE GOLDFINGER',
    'Já assisti a esse filme',
    'Não conheço o filme'
  ) AS 'conheço o filme?'
FROM
  sakila.film;

--2
SELECT
  title,
  rating,
  CASE
    WHEN rating = 'G' THEN 'Livre para todos'
    WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
    WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
    WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
    ELSE 'Proibido para menores de idade'
  END AS 'público-alvo'
FROM
  sakila.film;

--1
SELECT
  ROUND(15 + (RAND() * 5));

--2
SELECT
  ROUND(15.7515971, 5);

--3
SELECT
  FLOOR(39.494);

--4
SELECT
  CEIL(85.234);

--1
SELECT
  DATEDIFF('2030-01-20', NOW());

--2
SELECT
  TIMEDIFF('10:25:45', '11:00:00');

--1
SELECT
  AVG(length) AS 'Média de Duração',
  MIN(length) AS 'Duração Mínima',
  MAX(length) AS 'Duração Máxima',
  SUM(length) AS 'Tempo de Exibição Total',
  COUNT(*) AS 'Filmes Registrados'
FROM
  sakila.film;

--1
SELECT
  active,
  COUNT(*)
FROM
  sakila.customer
GROUP BY
  active;

--2
SELECT
  store_id,
  active,
  COUNT(*)
FROM
  sakila.customer
GROUP BY
  store_id,
  active
ORDER BY
  store_id;

--3
SELECT
  rating,
  AVG(rental_rate) AS avg_rental_dur
FROM
  sakila.film
GROUP BY
  rating
ORDER BY
  avg_rental_dur DESC;

--4
SELECT
  district,
  COUNT(*) AS address_count
FROM
  sakila.address
GROUP BY
  district
ORDER BY
  address_count DESC;

--1
SELECT
  rating,
  AVG(length) AS avg_rating
FROM
  sakila.film
GROUP BY
  rating
HAVING
  avg_rating BETWEEN 115.0
  AND 121.50;

--2
SELECT
  rating,
  SUM(replacement_cost) total_replacement_cost
FROM
  sakila.film
GROUP BY
  rating
HAVING
  total_replacement_cost > 3950.50
ORDER BY
  total_replacement_cost;