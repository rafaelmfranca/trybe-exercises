import { connection } from '../db/connection';
import { IZipCodeBody } from '../types/common';

export async function getByZipCode(zipcode: string) {
  const [row] = JSON.parse(
    JSON.stringify(
      await connection.execute('SELECT * FROM ceps WHERE cep  = ?', [zipcode])
    )
  );

  return row.length ? row[0] : null;
}

export async function addZipCode(zipcodeBody: IZipCodeBody) {
  const { cep, logradouro, bairro, localidade, uf } = zipcodeBody;

  await connection.execute(
    'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)',
    [cep, logradouro, bairro, localidade, uf]
  );
}
