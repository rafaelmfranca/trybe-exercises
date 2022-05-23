import { connection } from '../db/connection';

export async function getDistrictId(
  district: string,
  location: string,
  fu: string
) {
  const [districtOnDB] = JSON.parse(
    JSON.stringify(
      await connection.execute('SELECT id FROM bairros WHERE bairro = ?', [
        district,
      ])
    )
  );

  if (!districtOnDB.length) {
    const [newDistrict] = JSON.parse(
      JSON.stringify(
        await connection.execute(
          'INSERT INTO bairros (bairro, localidade, uf) VALUES (?, ?, ?)',
          [district, location, fu]
        )
      )
    );

    return newDistrict[0].id;
  }

  return districtOnDB[0].id;
}
