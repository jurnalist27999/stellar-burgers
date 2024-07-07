import { createSlice } from '@reduxjs/toolkit';
import { getAllFeeds, getAllOrders } from '../action';
import { TFeed } from '../types/feedType';
import { RootState } from '../store';

const initialState: TFeed = {
  orders: [],
  feed: { total: 0, totalToday: 0 },
  feedLoading: false,
  feeds: []
};

export const feedSlice = createSlice({
  //слайс для работы с запросами получения данных. Ниже три сценария
  name: 'feed',
  initialState,
  extraReducers: (builder) => {
    //условие лоайдера - загрузки - пока обрабатывается запрос.
    builder.addCase(getAllOrders.pending, (state) => {
      state.feedLoading = true;
    });
    builder.addCase(getAllOrders.fulfilled, (state, action) => {
      //условие получения данных запроса. При этом нужно указать завершение состояния лоадера - фолс.
      state.feedLoading = false;
      console.log(action.payload);
      state.orders = action.payload;
    });
    builder.addCase(getAllOrders.rejected, (state) => {
      //условие, если запрос не удался,вышла ошибки.
      state.feedLoading = false;
    });
    builder.addCase(getAllFeeds.pending, (state) => {
      state.feedLoading = true;
    });
    builder.addCase(getAllFeeds.fulfilled, (state, action) => {
      //условие получения данных запроса. При этом нужно указать завершение состояния лоадера - фолс.
      state.feedLoading = false;
      console.log(action.payload);
      state.feeds = action.payload.orders;
      state.feed.total = action.payload.total;
      state.feed.totalToday = action.payload.totalToday;
    });
    builder.addCase(getAllFeeds.rejected, (state) => {
      //условие, если запрос не удался,вышла ошибки.
      state.feedLoading = false;
    });
  },
  reducers: {}
});

export const feedReducer = feedSlice.reducer;
