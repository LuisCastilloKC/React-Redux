import { ActionTypes } from "../contants/action-types";

// initializing a temporality state
const initialState = {
  products: [ ],
};

//Reducer always take the initial State and the action. {type, payload} I'm destructor the action.
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {...state, products: payload};
    default:
      return state;
  }
};
