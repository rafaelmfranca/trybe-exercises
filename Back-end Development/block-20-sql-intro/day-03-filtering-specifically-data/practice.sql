--1
SELECT
  *
FROM
  Pecas
WHERE
  name LIKE 'GR%';

--2
SELECT
  *
FROM
  Fornecimentos
WHERE
  peca = 2
ORDER BY
  Fornecedor;

--3
SELECT
  peca,
  preco,
  Fornecedor
FROM
  Fornecimentos
WHERE
  Fornecedor LIKE '%N%';

--4
SELECT
  *
FROM
  Fornecedores
WHERE
  name LIKE '%LTDA'
ORDER BY
  name DESC;

--5
SELECT
  COUNT(*) AS empresas
FROM
  Fornecedores
WHERE
  code LIKE '%F%';

--6
SELECT
  *
FROM
  Fornecimentos
WHERE
  preco BETWEEN 15
  AND 40
ORDER BY
  preco;

--7
SELECT
  COUNT(*) numero_de_vendas
FROM
  Vendas
WHERE
  DATE(order_date) BETWEEN '2018-04-15'
  AND '2019-07-30';