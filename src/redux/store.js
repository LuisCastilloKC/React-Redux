import { createStore } from "redux";
import reducers from "./reducers/index";

//the store take couple arguments. The first argument is reducer which is all reducer and the second argument is the state and the state is an empty object
const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
