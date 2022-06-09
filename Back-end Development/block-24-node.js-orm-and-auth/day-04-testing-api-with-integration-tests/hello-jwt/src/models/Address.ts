import { connection } from '@db';

export default {
  getByUsername: (username: string) =>
    connection.query(
      `SELECT 
        a.address,
        a.district,
        ci.city,
        co.country
      FROM address AS a
        INNER JOIN staff AS s ON a.address_id = s.address_id
        INNER JOIN city AS ci ON a.city_id = ci.city_id
        INNER JOIN country AS co ON co.country_id = ci.country_id
      WHERE s.username = ?;`,
      [username]
    ),
};
