import { ISignInPayload } from '@types';
import { sign } from 'jsonwebtoken';

const secret = String(process.env.SECRET_KEY);

export default {
  generateToken: (payload: ISignInPayload) =>
    sign(payload, secret, { expiresIn: '1h', algorithm: 'HS256' }),
};
