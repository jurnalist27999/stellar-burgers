import { ProfileOrdersUI } from '@ui-pages';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/store';
import { getAllIngredients, getAllOrders } from '../../services/action';

export const ProfileOrders: FC = () => {
  const { orders } = useSelector((state) => state.feed);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
    dispatch(getAllIngredients());
  }, []);

  return <ProfileOrdersUI orders={orders} />;
};
