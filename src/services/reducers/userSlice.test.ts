import {
  getUserInfo,
  loginUser,
  logoutUser,
  registerUser,
  updateUser
} from '../action';
import { initialState, userReducer } from './useReducer';

describe('тестирование редьюсера userReducer', () => {
  describe('тестирование асинхронного GET экшена getUserInfo', () => {
    const actions = {
      pending: {
        type: getUserInfo.pending.type,
        payload: null
      },
      rejected: {
        type: getUserInfo.rejected.type,
        payload: null
      },
      fulfilled: {
        type: getUserInfo.fulfilled.type,
        payload: { user: { name: 'someName', email: 'someEmail' } }
      }
    };

    test('тест синхронного экшена getUser.pending', () => {
      const state = userReducer(initialState, actions.pending);
      expect(state.userLoading).toBe(true);
    });

    test('тест синхронного экшена getUser.rejected', () => {
      const state = userReducer(initialState, actions.rejected);
      expect(state.userLoading).toBe(false);
    });

    test('тест синхронного экшена getUser.fulfilled', () => {
      const nextState = userReducer(initialState, actions.fulfilled);
      expect(nextState.userLoading).toBe(false);
      expect(nextState.user).toEqual(actions.fulfilled.payload.user);
    });
  });

  describe('тестирование асинхронного POST экшена registerUser', () => {
    const actions = {
      pending: {
        type: registerUser.pending.type,
        payload: null
      },
      rejected: {
        type: registerUser.rejected.type,
        error: { message: 'Funny mock-error' }
      },
      fulfilled: {
        type: registerUser.fulfilled.type,
        payload: { user: { name: 'someName', email: 'someEmail' } }
      }
    };

    test('тест синхронного экшена registerUser.pending', () => {
      const nextState = userReducer(initialState, actions.pending);
      expect(nextState.userLoading).toBe(true);
    });
    test('тест синхронного экшена registerUser.rejected', () => {
      const nextState = userReducer(initialState, actions.rejected);
      expect(nextState.userLoading).toBe(false);
    });
    test('тест синхронного экшена registerUser.fulfilled', () => {
      const nextState = userReducer(initialState, actions.fulfilled);
      expect(nextState.userLoading).toBe(false);
      expect(nextState.user).toBe(actions.fulfilled.payload.user);
    });
  });
  describe('тестирование асинхронного POST экшена loginUser', () => {
    const actions = {
      pending: {
        type: loginUser.pending.type,
        payload: null
      },
      rejected: {
        type: loginUser.rejected.type,
        error: { message: 'Funny mock-error' }
      },
      fulfilled: {
        type: loginUser.fulfilled.type,
        payload: { user: { name: 'someName', email: 'someEmail' } }
      }
    };

    test('тест синхронного экшена loginUser.pending', () => {
      const nextState = userReducer(initialState, actions.pending);
      expect(nextState.userLoading).toBe(true);
    });
    test('тест синхронного экшена loginUser.rejected', () => {
      const nextState = userReducer(initialState, actions.rejected);
      expect(nextState.userLoading).toBe(false);
    });
    test('тест синхронного экшена loginUser.fulfilled', () => {
      const nextState = userReducer(initialState, actions.fulfilled);
      expect(nextState.userLoading).toBe(false);
      expect(nextState.user).toBe(actions.fulfilled.payload.user);
    });
  });
  describe('тестирование асинхронного PATCH экшена updateUser', () => {
    const actions = {
      pending: {
        type: updateUser.pending.type,
        payload: null
      },
      rejected: {
        type: updateUser.rejected.type,
        error: { message: 'Funny mock-error' }
      },
      fulfilled: {
        type: updateUser.fulfilled.type,
        payload: { user: { name: 'someName', email: 'someEmail' } }
      }
    };

    test('тест синхронного экшена updateUser.pending', () => {
      const nextState = userReducer(initialState, actions.pending);
      expect(nextState.userLoading).toBe(true);
    });
    test('тест синхронного экшена updateUser.rejected', () => {
      const nextState = userReducer(initialState, actions.rejected);
      expect(nextState.userLoading).toBe(false);
    });
    test('тест синхронного экшена updateUser.fulfilled', () => {
      const nextState = userReducer(initialState, actions.fulfilled);
      expect(nextState.userLoading).toBe(false);
      expect(nextState.user).toBe(actions.fulfilled.payload.user);
    });
  });
  describe('тестирование асинхронного POST экшена logoutUser', () => {
    const actions = {
      pending: {
        type: logoutUser.pending.type,
        payload: null
      },
      rejected: {
        type: logoutUser.rejected.type,
        error: { message: 'Funny mock-error' }
      },
      fulfilled: {
        type: logoutUser.fulfilled.type,
        payload: null
      }
    };

    test('тест синхронного экшена logoutUser.pending', () => {
      const nextState = userReducer(initialState, actions.pending);
      expect(nextState.userLoading).toBe(true);
    });
    test('тест синхронного экшена logoutUser.rejected', () => {
      const nextState = userReducer(initialState, actions.rejected);
      expect(nextState.userLoading).toBe(false);
    });
    test('тест синхронного экшена logoutUser.fulfilled', () => {
      const nextState = userReducer(initialState, actions.fulfilled);
      expect(nextState.userLoading).toBe(false);
      expect(nextState.user).toStrictEqual({
        name: '',
        email: ''
      });
    });
  });
});
