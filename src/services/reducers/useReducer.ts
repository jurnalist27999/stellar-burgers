import { createSlice } from '@reduxjs/toolkit';
import {
  getUserInfo,
  loginUser,
  logoutUser,
  registerUser,
  updateUser
} from '../action';
import { TUserState } from '../types/userStateType';
import { deleteCookie, getCookie, setCookie } from '../../utils/cookie';

const initialState: TUserState = {
  user: {
    name: '',
    email: ''
  },
  userLoading: false,
  refreshToken: localStorage.getItem('refreshToken') || '',
  accessToken: getCookie('accessToken') || ''
};

export const userSlice = createSlice({
  //слайс для работы с запросами получения данных. Ниже три сценария
  name: 'feed',
  initialState,
  extraReducers: (builder) => {
    //условие лоайдера - загрузки - пока обрабатывается запрос.
    builder.addCase(getUserInfo.pending, (state) => {
      state.userLoading = true;
    });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      //условие получения данных запроса. При этом нужно указать завершение состояния лоадера - фолс.
      state.userLoading = false;
      console.log(action.payload);
      state.user = action.payload.user;
    });
    builder.addCase(getUserInfo.rejected, (state) => {
      //условие, если запрос не удался,вышла ошибки.
      state.userLoading = false;
    });
    builder.addCase(registerUser.pending, (state) => {
      state.userLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      //условие получения данных запроса. При этом нужно указать завершение состояния лоадера - фолс.
      state.userLoading = false;
      console.log(action.payload);
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      setCookie('accessToken', action.payload.accessToken);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
    });
    builder.addCase(registerUser.rejected, (state) => {
      //условие, если запрос не удался,вышла ошибки.
      state.userLoading = false;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.userLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      //условие получения данных запроса. При этом нужно указать завершение состояния лоадера - фолс.
      state.userLoading = false;
      console.log(action.payload);
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      setCookie('accessToken', action.payload.accessToken);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
    });
    builder.addCase(loginUser.rejected, (state) => {
      //условие, если запрос не удался,вышла ошибки.
      state.userLoading = false;
    });
    builder.addCase(logoutUser.pending, (state) => {
      state.userLoading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      //условие получения данных запроса. При этом нужно указать завершение состояния лоадера - фолс.
      state.userLoading = false;
      console.log(action.payload);
      deleteCookie('accessToken');
    });
    builder.addCase(logoutUser.rejected, (state) => {
      //условие, если запрос не удался,вышла ошибки.
      state.userLoading = false;
    });
    builder.addCase(updateUser.pending, (state) => {
      state.userLoading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      //условие получения данных запроса. При этом нужно указать завершение состояния лоадера - фолс.
      state.userLoading = false;
      console.log(action.payload);
      state.user = action.payload.user;
    });
    builder.addCase(updateUser.rejected, (state) => {
      //условие, если запрос не удался,вышла ошибки.
      state.userLoading = false;
    });
  },
  reducers: {}
});

export const userReducer = userSlice.reducer;
