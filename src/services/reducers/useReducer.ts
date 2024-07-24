import { createSlice } from '@reduxjs/toolkit';
import {
  getUserInfo,
  loginUser,
  logoutUser,
  registerUser,
  updateUser
} from '../action';
import { TUserState } from '../types/userStateType';

export const initialState: TUserState = {
  user: {
    name: '',
    email: ''
  },
  userLoading: false
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
      state.user = {
        name: '',
        email: ''
      };
      console.log(action.payload);
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
