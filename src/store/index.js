import { combineReducers, createStore } from "redux";
import { countReducer } from "../reducers/countReducer";
import { postsReducer } from "../reducers/postsReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// const initialState = {
//   count: 50,
//   posts: [
//     { id: 1, title: "Reduxについて" },
//     { id: 2, title: "ReduxのHooksについて" },
//   ],
// };
// // countのReducer
// const countReducer = (state = initialState) => {
//   return state;
// };

// // postsのReducer
// const postsReducer = (state = initialState) => {
//   return state;
// };

/**
 * @概要 reducersオブジェクト内のすべてのreducerを呼び出す
 */
const rootReducer = combineReducers({
  countReducer,
  postsReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
export default store;
