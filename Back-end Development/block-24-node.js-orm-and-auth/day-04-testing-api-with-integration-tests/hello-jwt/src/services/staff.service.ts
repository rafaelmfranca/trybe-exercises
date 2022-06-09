import { Staff } from '@models';

export default {
  getAll: async () => {
    const [staffs] = JSON.parse(JSON.stringify(await Staff.getAll()));
    return staffs;
  },
};
