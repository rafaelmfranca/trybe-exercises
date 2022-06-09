import { Users } from '@models';
import { ISignInPayload } from '@types';
import { jwt } from '@utils';

export default {
  signIn: async ({ username, password }: ISignInPayload) => {
    const [[user]] = JSON.parse(
      JSON.stringify(
        await Users.getByUsernameAndPassword({ username, password })
      )
    );

    if (!user) return false;

    delete user.password;
    return jwt.generateToken(user);
  },
};
