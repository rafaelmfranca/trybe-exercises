--1
INSERT INTO
  `sakila`.`staff`(
    first_name,
    last_name,
    address_id,
    store_id,
    active,
    username
  )
VALUES
  ('Test', 'test', 2, 1, 1, 'Test');

--2
INSERT INTO
  `sakila`.`staff`(
    first_name,
    last_name,
    address_id,
    store_id,
    active,
    username
  )
VALUES
  ('test1', 'test1', 1, 2, 1, 'test1'),
  ('test2', 'test2', 1, 2, 1, 'test2');

--3
INSERT INTO
  `sakila`.`actor` (first_name, last_name)
SELECT
  first_name,
  last_name
FROM
  `sakila`.`customer`
LIMIT
  5;

--4
INSERT INTO
  `sakila`.`category` (name)
VALUES
  ('test1'),
  ('test2'),
  ('test3');

--5
INSERT INTO
  sakila.store (manager_staff_id, address_id)
VALUES
  (3, 3);

--1
UPDATE
  sakila.actor
SET
  first_name = 'JULES'
WHERE
  first_name = 'JULIA';

--2
UPDATE
  sakila.category
SET
  name = 'Science Fiction'
WHERE
  name = 'Sci-Fi';

--3
UPDATE
  sakila.film
SET
  rental_rate = 25
WHERE
  length > 100
  AND rating IN ('G', 'PG', 'PG-13')
  AND replacement_cost > 20;

--4
UPDATE
  sakila.film
SET
  rental_rate = (
    CASE
      WHEN length BETWEEN 1
      AND 100 THEN 10
      WHEN length > 100 THEN 20
    END
  );