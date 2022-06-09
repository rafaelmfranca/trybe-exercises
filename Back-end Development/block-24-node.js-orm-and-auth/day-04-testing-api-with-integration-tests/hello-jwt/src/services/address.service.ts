import { Address } from '@models';

export default {
  getByUsername: async (username: string) => {
    const [[address]] = JSON.parse(
      JSON.stringify(await Address.getByUsername(username))
    );
    return address;
  },
};
