import { getAllIngredients } from '../action';
import { dataReducer, initialState } from './dataReducer';

describe('тестирование редьюсера ingredientSlice', () => {
  describe('тестирование асинхронного GET экшена getIngredients', () => {
    const actions = {
      pending: {
        type: getAllIngredients.pending.type,
        payload: null
      },
      rejected: {
        type: getAllIngredients.rejected.type,
        error: { message: 'Funny mock-error' }
      },
      fulfilled: {
        type: getAllIngredients.fulfilled.type,
        payload: ['ingr1', 'ingr2']
      }
    };

    test('тест синхронного экшена getIngredients.pending', () => {
      const state = dataReducer(initialState, actions.pending);
      expect(state.ingridientsLoading).toBe(true);
    });

    test('тест синхронного экшена getIngredients.rejected', () => {
      const state = dataReducer(initialState, actions.rejected);
      expect(state.ingridientsLoading).toBe(false);
    });

    test('тест синхронного экшена getIngredients.fulfilled', () => {
      const nextState = dataReducer(initialState, actions.fulfilled);
      expect(nextState.ingridientsLoading).toBe(false);
      expect(nextState.ingridients).toEqual(actions.fulfilled.payload);
    });
  });
});
