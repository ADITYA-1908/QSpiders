const initialState = {
  count: 0,
  value: "",
};

export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "reset":
      return {
        ...state,
        count: 0,
      };
    case "inputvalue":
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
