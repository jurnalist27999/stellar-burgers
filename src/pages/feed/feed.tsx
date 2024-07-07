import { Preloader } from '@ui';
import { FeedUI } from '@ui-pages';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/store';
import {
  getAllFeeds,
  getAllIngredients,
  getAllOrders
} from '../../services/action';

export const Feed: FC = () => {
  const { feeds: orders, feedLoading } = useSelector((state) => state.feed);
  const dispatch = useDispatch();

  function handleGetFeeds() {
    dispatch(getAllFeeds());
    dispatch(getAllIngredients());
  }

  useEffect(() => {
    handleGetFeeds();
  }, []);

  if (feedLoading) {
    return <Preloader />;
  }
  console.log(orders);
  return <FeedUI orders={orders} handleGetFeeds={handleGetFeeds} />;
};
