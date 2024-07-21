import store from '../services/store';
import { rootReducer } from './root-reducer';

test('проверка работы rootReducer', () => {
  const expected = rootReducer(undefined, { type: 'UNKNOWN_ACTION' });
  expect(expected).toEqual(store.getState());
});
