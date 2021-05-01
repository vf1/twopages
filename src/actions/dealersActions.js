
export const SET_DEALERS = 'SET_DEALERS';

export function setDealers(dealers) {
  return {
    type: SET_DEALERS,
    payload: {
      dealers: dealers,
    },
  }
}
