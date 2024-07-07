import { TConstructorIngredient, TOrder } from '@utils-types';

export type TConstructor = {
  constructorItems: TConstructorItems;
  orderRequest: boolean;
  orderModalData: TOrder | null;
};

type TConstructorItems = {
  bun: { price: number; _id: string; name: string; image: string } | null;
  ingredients: TConstructorIngredient[];
};
