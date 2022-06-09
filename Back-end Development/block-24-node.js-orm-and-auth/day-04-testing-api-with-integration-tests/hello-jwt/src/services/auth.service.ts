import { Staff } from '@models';
import { ISignInPayload } from '@types';
import { jwt } from '@utils';

export default {
  signIn: async ({ username, password }: ISignInPayload) => {
    const [[staff]] = JSON.parse(
      JSON.stringify(
        await Staff.getByUsernameAndPassword({ username, password })
      )
    );

    if (!staff) return false;

    const { staff_id: staffId, email } = staff;
    return jwt.generateToken({ staffId, email, username });
  },
};
