import { getOrderByNumber } from '../action';
import { dataReducer, initialState } from './dataReducer';

describe('тестирование редьюсера dataReducer', () => {
  describe('тестирование асинхронного POST экшена getOrderByNumber', () => {
    const actions = {
      pending: {
        type: getOrderByNumber.pending.type,
        payload: null
      },
      rejected: {
        type: getOrderByNumber.rejected.type,
        error: { message: 'Funny mock-error' }
      },
      fulfilled: {
        type: getOrderByNumber.fulfilled.type,
        payload: { orders: ['someOrder'] }
      }
    };

    test('тест синхронного экшена getOrderByNumber.pending', () => {
      const nextState = dataReducer(initialState, actions.pending);
      expect(nextState.ordersDataLoading).toBe(true);
    });
    test('тест синхронного экшена getOrderByNumber.rejected', () => {
      const nextState = dataReducer(initialState, actions.rejected);
      expect(nextState.ordersDataLoading).toBe(false);
    });
    test('тест синхронного экшена getOrderByNumber.fulfilled', () => {
      const nextState = dataReducer(initialState, actions.fulfilled);
      expect(nextState.ordersDataLoading).toBe(false);
      expect(nextState.orderData).toBe(actions.fulfilled.payload.orders[0]);
    });
  });
});
