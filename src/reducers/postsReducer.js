const initialState = {
  posts: [
    { id: 1, title: "Reduxについて" },
    { id: 2, title: "ReduxのHooksについて" },
  ],
};

export const postsReducer = (state = initialState, action) => {
  return state;
};
