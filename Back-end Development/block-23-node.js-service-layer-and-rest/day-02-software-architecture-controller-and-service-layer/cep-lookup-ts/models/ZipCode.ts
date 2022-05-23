import { District } from '.';
import { connection } from '../db/connection';
import { IZipCodeBody } from '../types/common';

export async function getByZipCode(zipcode: string) {
  const [row] = JSON.parse(
    JSON.stringify(
      await connection.execute(
        'SELECT c.cep, c.logradouro, b.bairro, b.localidade, b.uf FROM ceps AS c INNER JOIN bairros AS b ON c.bairro_id = b.id WHERE c.cep = ?',
        [zipcode]
      )
    )
  );

  return row.length ? row[0] : null;
}

export async function addZipCode(zipcodeBody: IZipCodeBody) {
  const { cep, logradouro, bairro, localidade, uf } = zipcodeBody;

  const districtId = await District.getDistrictId(bairro, localidade, uf);

  await connection.execute(
    'INSERT INTO ceps (cep, logradouro, bairro_id) VALUES (?, ?, ?)',
    [cep, logradouro, districtId]
  );
}
