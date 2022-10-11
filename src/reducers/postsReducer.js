const initialState = { posts: [] };

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POST_DATA":
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
