
import { ADD_PRODUCT } from '../actions/cartActions'
import { REMOVE_PRODUCT } from '../actions/cartActions'
import { REMOVE_ALL_PRODUCTS } from '../actions/cartActions'
import { SET_PRODUCT_COUNT } from '../actions/cartActions'

const initialState = {
  value: JSON.parse(localStorage.getItem('twopagescart')) ?? [],
  totalCount: 0,
  totalPrice: 0,
};

function cartInternal(state, action) {

  switch (action.type) {

    case ADD_PRODUCT: {
      const productIndex = state.value.findIndex(
        product => product.name === action.payload.product.name);

      if (productIndex >= 0) {
        return {
          ...state,
          value: [
            ...state.value.slice(0, productIndex),
            {
              ...action.payload.product,
              count: state.value[productIndex].count + action.payload.count,
            },
            ...state.value.slice(productIndex + 1),
          ]
        }
      }

      return {
        ...state,
        value: [
          ...state.value,
          {
            ...action.payload.product,
            count: action.payload.count,
          }
        ]
      }
    }

    case REMOVE_PRODUCT: {
      const productIndex = state.value.findIndex(
        product => product.name === action.payload.name);
      if (productIndex >= 0) {
        return {
          ...state,
          value: [
            ...state.value.slice(0, productIndex),
            ...state.value.slice(productIndex + 1),
          ]
        }
      }
      return state;
    }

    case REMOVE_ALL_PRODUCTS:
      return {
        ...state,
        value: [],
      }

    case SET_PRODUCT_COUNT: {
      const productIndex = state.value.findIndex(
        product => product.name === action.payload.name);
      if (productIndex >= 0) {
        return {
          ...state,
          value: [
            ...state.value.slice(0, productIndex),
            {
              ...state.value[productIndex],
              count: (action.payload.count > 0) ? action.payload.count : 1,
            },
            ...state.value.slice(productIndex + 1),
          ]
        }
      }
      return state;
    }

    default:
      return state
  }
}

export function cart(state = initialState, action) {
  const newState = cartInternal(state, action);

  let totalCount = 0, totalPrice = 0;
  for (let item of newState.value) {
    totalCount += parseInt(item.count);
    totalPrice += item.count * item.price;
  }

  return {
    ...state,
    ...newState,
    totalCount: totalCount,
    totalPrice: totalPrice.toFixed(2),
  }
}
