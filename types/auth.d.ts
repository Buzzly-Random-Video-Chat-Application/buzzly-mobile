import type { Token } from './token';
import type { User } from './user';

export interface Auth {
  user: User;
  tokens: Token;
}
