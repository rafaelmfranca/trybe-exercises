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