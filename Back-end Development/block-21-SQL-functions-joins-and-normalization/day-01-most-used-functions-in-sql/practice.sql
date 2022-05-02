--1
SELECT
  MAX(salary)
FROM
  hr.employees;

--2
SELECT
  MAX(salary) - MIN(salary)
FROM
  hr.employees;

--3
SELECT
  job_id,
  AVG(salary)
FROM
  hr.employees
GROUP BY
  job_id
ORDER BY
  AVG(salary) DESC;

--4
SELECT
  SUM(salary)
FROM
  hr.employees;

--5
SELECT
  MAX(salary),
  MIN(salary),
  SUM(salary),
  ROUND(AVG(salary), 2)
FROM
  hr.employees;

--6
SELECT
  job_id,
  COUNT(*)
FROM
  hr.employees
GROUP BY
  job_id
HAVING
  job_id = 'IT_PROG';

--7
SELECT
  job_id,
  SUM(salary)
FROM
  hr.employees
GROUP BY
  job_id
ORDER BY
  SUM(salary) DESC;

--8
SELECT
  job_id,
  SUM(salary)
FROM
  hr.employees
GROUP BY
  job_id
HAVING
  job_id = 'IT_PROG';

--9
SELECT
  job_id,
  AVG(salary)
FROM
  hr.employees
GROUP BY
  job_id
HAVING
  job_id <> 'IT_PROG'
ORDER BY
  AVG(salary) DESC;

--10
SELECT
  department_id,
  AVG(salary),
  COUNT(*)
FROM
  hr.employees
GROUP BY
  department_id
HAVING
  COUNT(*) > 10;

--11
UPDATE
  hr.employees
SET
  phone_number = REPLACE(phone_number, '515', '777');

--12
SELECT
  *
FROM
  hr.employees
WHERE
  LENGTH(first_name) >= 8;

--13
SELECT
  EMPLOYEE_ID,
  FIRST_NAME,
  YEAR(HIRE_DATE)
FROM
  hr.employees;

--14
SELECT
  EMPLOYEE_ID,
  FIRST_NAME,
  DAY(HIRE_DATE)
FROM
  hr.employees;

--15
SELECT
  EMPLOYEE_ID,
  FIRST_NAME,
  MONTH(HIRE_DATE)
FROM
  hr.employees;

--16
SELECT
  UPPER(FIRST_NAME)
FROM
  hr.employees;

--17
SELECT
  FIRST_NAME,
  HIRE_DATE
FROM
  hr.employees
WHERE
  MONTH(HIRE_DATE) = 7
  AND YEAR(HIRE_DATE) = 1987;

--18
SELECT
  FIRST_NAME,
  LAST_NAME,
  DATEDIFF(CURRENT_DATE(), HIRE_DATE)
FROM
  hr.employees;