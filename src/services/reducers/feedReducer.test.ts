import { getAllFeeds } from '../action';
import { feedReducer, initialState } from './feedReducer';

describe('тестирование редьюсера feedReducer', () => {
  describe('тестирование асинхронного GET экшена getAllFeeds', () => {
    const actions = {
      pending: {
        type: getAllFeeds.pending.type,
        payload: null
      },
      rejected: {
        type: getAllFeeds.rejected.type,
        error: { message: 'Funny mock-error' }
      },
      fulfilled: {
        type: getAllFeeds.fulfilled.type,
        payload: { orders: ['order1', 'order2'] }
      }
    };

    test('тест синхронного экшена getFeeds.pending', () => {
      const state = feedReducer(initialState, actions.pending);
      expect(state.feedLoading).toBe(true);
    });

    test('тест синхронного экшена getFeeds.rejected', () => {
      const state = feedReducer(initialState, actions.rejected);
      expect(state.feedLoading).toBe(false);
    });

    test('тест синхронного экшена getFeeds.fulfilled', () => {
      const nextState = feedReducer(initialState, actions.fulfilled);
      expect(nextState.feedLoading).toBe(false);
      expect(nextState.feeds).toEqual(actions.fulfilled.payload.orders);
    });
  });
});
