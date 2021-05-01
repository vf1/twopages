
import { GET_PRODUCTS_REQUEST } from '../actions/productActions'
import { GET_PRODUCTS_SUCCESS } from '../actions/productActions'
import { GET_PRODUCTS_FAIL } from '../actions/productActions'

const initialState = {
  isFetching: false,
  error: '',
  value: [],
};

export function products(state = initialState, action) {
  switch (action.type) {

    case GET_PRODUCTS_REQUEST:
      return {
        ...initialState,
        isFetching: true,
      }

    case GET_PRODUCTS_SUCCESS:
      return {
        ...initialState,
        value: action.payload.products,
      }

    case GET_PRODUCTS_FAIL:
      return {
        ...initialState,
        error: action.payload.message,
      }

    default:
      return state
  }
}
