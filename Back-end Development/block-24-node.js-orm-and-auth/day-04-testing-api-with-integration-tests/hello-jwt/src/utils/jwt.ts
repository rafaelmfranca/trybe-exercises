import { ISignInTokenPayload } from '@types';
import { sign, verify } from 'jsonwebtoken';

const secret = String(process.env.SECRET_KEY);

export default {
  generateToken: (payload: ISignInTokenPayload) =>
    sign(payload, secret, { expiresIn: '1h', algorithm: 'HS256' }),

  verifyToken: (token: string) => verify(token, secret),
};
