import { ProfileOrdersUI } from '@ui-pages';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/store';
import { getAllOrders } from '../../services/action';

export const ProfileOrders: FC = () => {
  const { orders } = useSelector((state) => state.feed);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  return <ProfileOrdersUI orders={orders} />;
};
