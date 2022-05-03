--1
SELECT
  m.title,
  bo.domestic_sales,
  bo.international_sales
FROM
  Pixar.BoxOffice AS bo
  INNER JOIN Pixar.Movies AS m ON m.id = bo.movie_id
ORDER BY
  m.title;

--2
SELECT
  m.title,
  (bo.domestic_sales + bo.international_sales) AS sales
FROM
  Pixar.BoxOffice AS bo
  INNER JOIN Pixar.Movies AS m ON m.id = bo.movie_id
WHERE
  bo.domestic_sales < bo.international_sales
ORDER BY
  m.title;

--3
SELECT
  m.title,
  bo.rating
FROM
  Pixar.Movies AS m
  INNER JOIN Pixar.BoxOffice AS bo ON m.id = bo.movie_id
ORDER BY
  bo.rating DESC;

--4
SELECT
  t.*,
  m.*
FROM
  Pixar.Theater AS t
  LEFT JOIN Pixar.Movies AS m ON m.theater_id = t.id
ORDER BY
  t.name;

--5
SELECT
  t.*,
  m.*
FROM
  Pixar.Theater AS t
  RIGHT JOIN Pixar.Movies AS m ON m.theater_id = t.id
ORDER BY
  t.name;

--6
SELECT
  m.*
FROM
  Pixar.Movies AS m
  INNER JOIN Pixar.BoxOffice AS bo ON m.id = bo.movie_id
WHERE
  m.theater_id IS NOT NULL
  AND bo.rating > 8;