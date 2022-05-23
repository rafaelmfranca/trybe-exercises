import axios from 'axios';
import { STATUS_CODE } from './../utils/httpStatus';

export async function getExternalZipCode(zipcode: string) {
  try {
    const { data } = await axios.get(
      `https://viacep.com.br/ws/${zipcode}/json/`
    );

    if (data.erro) {
      return {
        error: {
          status: STATUS_CODE.NOT_FOUND,
          code: 'zipcode_not_found',
          message: 'Zipcode not found',
        },
      };
    }

    return data;
  } catch (error) {
    return error;
  }
}
