import { TIngredient, TOrder } from '@utils-types';

export type TData = {
  ingridients: TIngredient[];
  buns: TIngredient[];
  mains: TIngredient[];
  sauces: TIngredient[];
  ingridientsLoading: boolean;
  ordersData: TOrder[];
  ordersDataLoading: boolean;
  orderData: TOrder | null;
};
