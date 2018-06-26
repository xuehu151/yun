import { Err } from './error';
import { User } from './user';

export interface Auth {
  user?: User;
  userId?: string;
  err?: Err;
  token?: string;
}
