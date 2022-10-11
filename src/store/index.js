import { createStore } from "redux";

const initialState = {
  count: 100,
};

const reducer = (state = initialState) => {
  return state;
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
