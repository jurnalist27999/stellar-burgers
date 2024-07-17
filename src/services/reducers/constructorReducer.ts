import { createSlice, isAction } from '@reduxjs/toolkit';
import { createBurger } from '../action';
import { TConstructor } from '../types/constructorType';
import { v4 as uuidv4 } from 'uuid';

const initialState: TConstructor = {
  constructorItems: {
    bun: null,
    /* {
      price: 0,
      _id: '',
      name: '',
    image: '',    },*/
    ingredients: []
  },
  orderRequest: false,
  orderModalData: null
};

export const constructorSlice = createSlice({
  //слайс для работы с запросами получения данных. Ниже три сценария
  name: 'constructor',
  initialState,
  extraReducers: (builder) => {
    //условие лоайдера - загрузки - пока обрабатывается запрос.
    builder.addCase(createBurger.pending, (state) => {
      state.orderRequest = true;
    });
    builder.addCase(createBurger.fulfilled, (state, action) => {
      //условие получения данных запроса. При этом нужно указать завершение состояния лоадера - фолс.
      state.orderRequest = false;
      state.orderModalData = action.payload.order;
      console.log(action.payload);
    });
    builder.addCase(createBurger.rejected, (state) => {
      //условие, если запрос не удался,вышла ошибки.
      state.orderRequest = false;
    });
  },
  reducers: {
    addIngridient: (state, action) => {
      const key = uuidv4();
      if (action.payload.type === 'bun') {
        state.constructorItems.bun = { ...action.payload, key };
      } else {
        state.constructorItems.ingredients = [
          { ...action.payload, key },
          ...state.constructorItems.ingredients
        ];
      }
    },
    removeIngridient: (state, action) => {
      state.constructorItems.ingredients =
        state.constructorItems.ingredients.filter(
          (item, index) => index !== action.payload
        );
    },
    moveUpIngridient: (state, action) => {
      const index = action.payload;
      const nextIndex = index - 1;
      const ingridient = state.constructorItems.ingredients[index];

      state.constructorItems.ingredients[index] =
        state.constructorItems.ingredients[nextIndex];
      state.constructorItems.ingredients[nextIndex] = ingridient;
    },

    moveDownIngridient: (state, action) => {
      const index = action.payload;
      const nextIndex = index + 1;
      const ingridient = state.constructorItems.ingredients[index];

      state.constructorItems.ingredients[index] =
        state.constructorItems.ingredients[nextIndex];
      state.constructorItems.ingredients[nextIndex] = ingridient;
    },
    clearIngridients: (state) => {
      (state.constructorItems = {
        bun: null,
        /* {
          price: 0,
          _id: '',
          name: '',
        image: '',    },*/
        ingredients: []
      }),
        (state.orderModalData = null);
    }
  }
});

export const {
  addIngridient,
  removeIngridient,
  moveDownIngridient,
  moveUpIngridient,
  clearIngridients
} = constructorSlice.actions;
export const constructorReducer = constructorSlice.reducer;
