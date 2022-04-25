--1
select
  *
from
  sakila.customer
where
  email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

--2
select
  *
from
  sakila.customer
where
  active is false
  and store_id = 2
  and first_name <> 'KENNETH'
order by
  first_name;

--3
SELECT
  title,
  description,
  release_year,
  replacement_cost
FROM
  sakila.film
WHERE
  rating <> 'NC-17'
  AND replacement_cost > 18.00
ORDER BY
  replacement_cost DESC,
  title
LIMIT
  50;

--4
SELECT
  COUNT(*) AS active_customers_count
FROM
  sakila.customer
WHERE
  active IS TRUE
  AND store_id = 1;

--5
SELECT
  *
FROM
  sakila.customer
WHERE
  active IS FALSE
  AND store_id = 1;

--6
SELECT
  title
FROM
  sakila.film
WHERE
  rating = 'NC-17'
ORDER BY
  rental_rate,
  title
LIMIT
  50;

--1
SELECT
  *
FROM
  film
WHERE
  title LIKE '%ace%';

--2
SELECT
  *
FROM
  film
WHERE
  description LIKE '%china';

--3
SELECT
  *
FROM
  film
WHERE
  description LIKE '%girl%'
  AND title LIKE '%lord';

--4
SELECT
  *
FROM
  film
WHERE
  title LIKE '___gon%';

--5
SELECT
  *
FROM
  sakila.film
WHERE
  title LIKE '___gon%'
  AND description LIKE '%Documentary%';

--6
SELECT
  *
FROM
  sakila.film
WHERE
  title LIKE '%academy'
  OR title LIKE 'mosquito%';

--7
SELECT
  *
FROM
  sakila.film
WHERE
  description LIKE '%monkey%'
  AND description LIKE '%sumo%';