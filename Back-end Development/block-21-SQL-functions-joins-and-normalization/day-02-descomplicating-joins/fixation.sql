--INNER JOIN
--1
SELECT
  a.actor_id,
  CONCAT(a.first_name, ' ', a.last_name) AS name,
  fa.film_id
FROM
  sakila.actor AS a
  INNER JOIN sakila.film_actor AS fa ON a.actor_id = fa.actor_id;

--2
SELECT
  CONCAT(s.first_name, ' ', s.last_name) AS name,
  a.address
FROM
  sakila.staff AS s
  INNER JOIN sakila.address AS a ON s.address_id = a.address_id;

--3
SELECT
  c.customer_id,
  CONCAT(c.first_name, ' ', c.last_name) AS name,
  c.email,
  c.address_id,
  a.address
FROM
  sakila.customer AS c
  INNER JOIN sakila.address AS a ON c.address_id = a.address_id
ORDER BY
  name DESC
LIMIT
  100;

--4
SELECT
  CONCAT(c.first_name, ' ', c.last_name) AS name,
  c.email,
  c.address_id,
  a.address,
  a.district
FROM
  sakila.customer AS c
  INNER JOIN sakila.address AS a ON c.address_id = a.address_id
WHERE
  a.district = 'California'
  AND c.first_name LIKE '%rene%';

--5
SELECT
  CONCAT(c.first_name, ' ', c.last_name) AS name,
  COUNT(a.address) AS address_count
FROM
  sakila.customer AS c
  INNER JOIN sakila.address AS a ON c.address_id = a.address_id
WHERE
  c.active = 1
GROUP BY
  c.customer_id
ORDER BY
  c.first_name DESC;

--6
SELECT
  CONCAT(s.first_name, ' ', s.last_name) AS name,
  AVG(p.amount) AS avg_payment
FROM
  sakila.staff AS s
  INNER JOIN sakila.payment AS p ON s.staff_id = p.staff_id
WHERE
  YEAR(p.payment_date) = 2006
GROUP BY
  name;

--7
SELECT
  a.actor_id,
  CONCAT(a.first_name, ' ', a.last_name) AS name,
  f.film_id,
  f.title
FROM
  sakila.actor AS a
  INNER JOIN sakila.film_actor AS fa ON a.actor_id = fa.actor_id
  INNER JOIN sakila.film AS f ON fa.film_id = f.film_id;