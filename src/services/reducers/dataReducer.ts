import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getAllIngredients, getOrderByNumber } from '../action';
import { TData } from '../types/dataType';
import { RootState } from '../store';
import { TOrder } from '@utils-types';

export const initialState: TData = {
  ingridients: [],
  buns: [],
  mains: [],
  sauces: [],
  ingridientsLoading: false,
  ordersData: [],
  ordersDataLoading: false,
  orderData: null
};

export const dataSlice = createSlice({
  //слайс для работы с запросами получения данных. Ниже три сценария
  name: 'data',
  initialState,
  extraReducers: (builder) => {
    //условие лоайдера - загрузки - пока обрабатывается запрос.
    builder.addCase(getAllIngredients.pending, (state) => {
      state.ingridientsLoading = true;
    });
    builder.addCase(getAllIngredients.fulfilled, (state, action) => {
      //условие получения данных запроса. При этом нужно указать завершение состояния лоадера - фолс.
      state.ingridientsLoading = false;
      console.log(action.payload);
      state.buns = action.payload.filter((item) => item.type === 'bun');
      state.mains = action.payload.filter((item) => item.type === 'main');
      state.sauces = action.payload.filter((item) => item.type === 'sauce');
      state.ingridients = action.payload;
    });
    builder.addCase(getAllIngredients.rejected, (state) => {
      //условие, если запрос не удался,вышла ошибки.
      state.ingridientsLoading = false;
    });
    builder.addCase(getOrderByNumber.pending, (state) => {
      state.ordersDataLoading = true;
    });
    builder.addCase(getOrderByNumber.fulfilled, (state, action) => {
      //условие получения данных запроса. При этом нужно указать завершение состояния лоадера - фолс.
      state.ordersDataLoading = false;
      console.log(action.payload);
      state.orderData = action.payload.orders[0];
    });
    builder.addCase(getOrderByNumber.rejected, (state) => {
      //условие, если запрос не удался,вышла ошибки.
      state.ordersDataLoading = false;
    });
  },
  reducers: {}
});

export const getIngridientData = (id: string) => (state: RootState) =>
  state.data.ingridients.find((item) => item._id === id);

export const dataReducer = dataSlice.reducer;
