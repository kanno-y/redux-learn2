const initialState = {
  count: 30,
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREACE_COUNT":
      return {
        count: state.count + 1,
      };
    case "DECREACE_COUNT":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};
