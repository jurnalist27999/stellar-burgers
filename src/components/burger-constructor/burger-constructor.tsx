import { FC, useMemo } from 'react';
import { TConstructorIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';
import { useDispatch, useSelector } from '../../services/store';
import { createBurger } from '../../services/action';
import { clearIngridients } from '../../services/reducers/constructorReducer';
import { getCookie } from '../../utils/cookie';
import { useNavigate } from 'react-router-dom';

export const BurgerConstructor: FC = () => {
  const { constructorItems, orderRequest, orderModalData } = useSelector(
    (state) => state.burgerConstructor
  );

  console.log(constructorItems);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onOrderClick = () => {
    if (!getCookie('accessToken')) return navigate('/login');
    if (!constructorItems.bun || orderRequest) return;
    dispatch(
      createBurger(
        [...constructorItems.ingredients, constructorItems.bun].map(
          (item) => item._id
        )
      )
    );
  };
  const closeOrderModal = () => {
    dispatch(clearIngridients());
  };
  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (s: number, v: TConstructorIngredient) => s + v.price,
        0
      ),
    [constructorItems]
  );

  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
      orderModalData={orderModalData}
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
};
