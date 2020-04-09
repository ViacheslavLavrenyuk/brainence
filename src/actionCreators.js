import {
  REMOVE_PRODUCT,
  ADD_PRODUCT,
  PIN_PRODUCT,
} from './constants';

export const removeProduct = value => ({
  type: REMOVE_PRODUCT,
  id: value,
});

export const addProduct = product => ({
  type: ADD_PRODUCT,
  product,
});

export const pinProduct = value => ({
  type: PIN_PRODUCT,
  id: value,
});
