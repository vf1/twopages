
export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';

export function getProducts() {
  return async (dispatch, getState) => {
    const state = getState();

    dispatch({
      type: GET_PRODUCTS_REQUEST,
    });

    try {
      const productsUrl = 'https://murmuring-tor-81614.herokuapp.com/api/goods/';
      const dealersQuery = (state.dealers.value.length > 0) ? `?dealers=${state.dealers.value.join(',')}` : '';

      let response = await fetch(productsUrl + dealersQuery, { method: 'GET' });
      let products = await response.json();

      for (let product of products) {
        product.image = 'https://murmuring-tor-81614.herokuapp.com' + product.image;
      }

      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: { products: products },
      });
    }
    catch (err) {
      dispatch({
        type: GET_PRODUCTS_FAIL,
        payload: err.message,
      })
    }
  }
}
