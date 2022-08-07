import { ActionTypes } from "../contants/action-types";

// initializing a temporality state
const initialState = {
  products: [
    {
      id: 1,
      title: "Dipesh",
      category: "programmer",
    },
  ],
};

//Reducer always take the initial State and the action. {type, payload} I'm destructor the action.
export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
