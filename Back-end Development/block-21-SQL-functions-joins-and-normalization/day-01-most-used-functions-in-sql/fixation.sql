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