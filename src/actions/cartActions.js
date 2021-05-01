
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const REMOVE_ALL_PRODUCTS = 'REMOVE_ALL_PRODUCTS';
export const SET_PRODUCT_COUNT = 'SET_PRODUCT_COUNT';

export function addToCart(name) {
  return (dispatch, getState) => {
    const state = getState();
    const product = state.products.value.find(product => product.name === name);

    if (product) {
      dispatch({
        type: ADD_PRODUCT,
        payload: {
          product: product,
          count: 1,
        },
      });
    }
  }
}

export function removeFromCart(name) {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      name: name,
    },
  }
}

export function clearCart(name) {
  return {
    type: REMOVE_ALL_PRODUCTS,
    payload: {
      name: name,
    },
  }
}

export function setCartItemCount(name, count) {
  return {
    type: SET_PRODUCT_COUNT,
    payload: {
      name: name,
      count: parseInt(count),
    },
  }
}
