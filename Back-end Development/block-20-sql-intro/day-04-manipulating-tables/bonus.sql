--8
UPDATE
  Pixar.BoxOffice
SET
  rating = 9.0
WHERE
  domestic_sales > 400000000;

--9
UPDATE
  Pixar.BoxOffice
SET
  rating = 6.0
WHERE
  international_sales < 300000000
  AND domestic_sales > 200000000;

--10
SELECT
  id
FROM
  Pixar.Movies
WHERE
  length_minutes < 100;

DELETE FROM
  Pixar.BoxOffice
WHERE
  movie_id IN (1, 6, 7, 8);

DELETE FROM
  Pixar.Movies
WHERE
  length_minutes < 100;