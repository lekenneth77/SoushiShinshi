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
      return {
        ...state,
        arr: state.arr.filter((element) => element !== action.item),
      };
    case "EMPTY":
      return {
        ...state,
        arr: [],
      };
    default:
      return state;
  }
};
export default reducer;
