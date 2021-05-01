
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

store.subscribe(() => {
  localStorage.setItem('twopagescart', JSON.stringify(store.getState().cart.value))
})
