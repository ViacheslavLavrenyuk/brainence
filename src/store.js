import { createStore } from 'redux';
import {
  REMOVE_PRODUCT,
  ADD_PRODUCT,
  PIN_PRODUCT,
} from './constants';

const initialState = {
  products: [],
};

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_PRODUCT:
      return {
        products: [...state.products].filter(
          product => product.id !== action.id,
        ),
      };
    case ADD_PRODUCT:
      return {
        products: [
          ...state.products,
          action.product,
        ],
      };
    case PIN_PRODUCT:
      return {
        products: [[...state.products].find(
          product => product.id === action.id,
        )].concat([...state.products].filter(
          product => product.id !== action.id,
        )),
      };
    default:
      return state;
  }
};

export const store = createStore(reduser);
