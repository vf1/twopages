
import { SET_DEALERS } from '../actions/dealersActions'

const initialState = {
  value: [],
};

export function dealers(state = initialState, action) {
  switch (action.type) {

    case SET_DEALERS:
      return {
        ...initialState,
        value: action.payload.dealers,
      }

    default:
      return state
  }
}
