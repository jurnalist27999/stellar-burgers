import { TOrder } from '@utils-types';

export type TFeed = {
  orders: TOrder[];
  feed: any;
  feedLoading: boolean;
  feeds: TOrder[];
};
