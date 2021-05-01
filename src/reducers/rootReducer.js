
import { combineReducers } from 'redux'
import { products } from './products'
import { cart } from './cart'
import { dealers } from "./dealers";

export const rootReducer = combineReducers({
    dealers,
    products,
    cart,
})
