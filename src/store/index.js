import { combineReducers, createStore } from "redux";

// countのReducer
const countReducer = (state = { count: 50 }) => {
  return state;
};

// postsのReducer
const postsReducer = (
  state = {
    posts: [
      { id: 1, title: "Reduxについて" },
      { id: 2, title: "ReduxのHooksについて" },
    ],
  }
) => {
  return state;
};

/**
 * @概要 reducersオブジェクト内のすべてのreducerを呼び出す
 */
const rootReducer = combineReducers({
  countReducer,
  postsReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState());

export default store;
