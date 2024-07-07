import { TUser } from '@utils-types';

export type TUserState = {
  user: TUser;
  userLoading: boolean;
  refreshToken: string;
  accessToken: string;
};