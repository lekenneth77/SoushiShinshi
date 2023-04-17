const initState = {
  arr: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        arr: [...state.arr, action.item],
      };
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};
export default reducer;
