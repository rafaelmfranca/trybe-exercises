import { ViaCep, ZipCode } from '../models';
import { IZipCodeBody } from '../types/common';
import { STATUS_CODE } from './../utils/httpStatus';

function normalizeZipCode(zipCode: string) {
  return zipCode.replace('-', '');
}

function formatZipCode(zipCode: string) {
  const splittedZipCode = zipCode.split('');

  splittedZipCode.splice(5, 0, '-');

  return splittedZipCode.join('');
}

export async function getZipCode(zipcode: string) {
  const response = await ZipCode.getByZipCode(normalizeZipCode(zipcode));

  if (!response) {
    const extZipCode = await ViaCep.getExternalZipCode(zipcode);

    if (extZipCode.error) {
      return extZipCode;
    }

    await ZipCode.addZipCode({
      cep: normalizeZipCode(extZipCode.cep),
      logradouro: extZipCode.logradouro,
      bairro: extZipCode.bairro,
      localidade: extZipCode.localidade,
      uf: extZipCode.uf,
    });

    return extZipCode;
  }

  return {
    ...response,
    cep: formatZipCode(response.cep),
  };
}

export async function addZipCode(zipcodeBody: IZipCodeBody) {
  const { cep, logradouro, bairro, localidade, uf } = zipcodeBody;

  const response = await ZipCode.getByZipCode(normalizeZipCode(cep));

  if (response) {
    return {
      error: {
        status: STATUS_CODE.CONFLICT,
        code: 'zipcode_already_exists',
        message: 'Zipcode already exists',
      },
    };
  }

  await ZipCode.addZipCode({
    cep: normalizeZipCode(cep),
    logradouro,
    bairro,
    localidade,
    uf,
  });

  return { cep, logradouro, bairro, localidade, uf };
}
