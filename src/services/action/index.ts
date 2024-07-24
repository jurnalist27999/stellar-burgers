import { deleteCookie, setCookie } from '../../utils/cookie';
import {
  TLoginData,
  TRegisterData,
  getFeedsApi,
  getIngredientsApi,
  getOrderByNumberApi,
  getOrdersApi,
  getUserApi,
  loginUserApi,
  logoutApi,
  orderBurgerApi,
  registerUserApi,
  updateUserApi
} from '../../utils/burger-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllIngredients = createAsyncThunk(
  'data/getAllIngredients',
  getIngredientsApi
);

export const createBurger = createAsyncThunk(
  'constructor/createBurger',
  (data: string[]) => orderBurgerApi(data)
);

export const getAllOrders = createAsyncThunk('feed/getAllOrders', getOrdersApi);

export const getOrderByNumber = createAsyncThunk(
  'data/getOrderByNumber',
  (number: number) => getOrderByNumberApi(number)
);

export const getUserInfo = createAsyncThunk('user/getUserInfo', getUserApi);

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (data: TRegisterData) => {
    const res = await registerUserApi(data);
    if (!res.success) {
      return res;
    }
    setCookie('accessToken', res.accessToken);
    localStorage.setItem('refreshToken', res.refreshToken);

    return res;
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (data: TLoginData) => {
    const res = await loginUserApi(data);
    if (!res.success) {
      return res;
    }
    setCookie('accessToken', res.accessToken);
    localStorage.setItem('refreshToken', res.refreshToken);

    return res;
  }
);

export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
  logoutApi().then(() => {
    deleteCookie('accessToken');
  });
});

export const updateUser = createAsyncThunk(
  'user/updateUser',
  (data: Partial<TRegisterData>) => updateUserApi(data)
);

export const getAllFeeds = createAsyncThunk('feed/getAllFeeds', getFeedsApi);
