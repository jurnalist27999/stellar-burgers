import { combineReducers } from '@reduxjs/toolkit';
import { dataReducer } from './reducers/dataReducer';
import { constructorReducer } from './reducers/constructorReducer';
import { feedReducer } from './reducers/feedReducer';
import { userReducer } from './reducers/useReducer';

export const rootReducer = combineReducers({
  data: dataReducer,
  burgerConstructor: constructorReducer,
  feed: feedReducer,
  user: userReducer
});
