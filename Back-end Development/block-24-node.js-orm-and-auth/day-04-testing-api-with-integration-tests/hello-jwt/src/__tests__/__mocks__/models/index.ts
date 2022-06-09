import staffs from './staffs.json';

export const StaffMock = {
  getAll: async () => staffs,
  getByUsernameAndPassword: async () => [[staffs[0]]],
  getByUsernameAndPassword2: async () => [[undefined]],
};
