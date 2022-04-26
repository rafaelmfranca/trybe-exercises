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