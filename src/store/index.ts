export const countReducer = (
  state = { value: 0 },
  action: { type: "INCREMENT" | "DECREMENT"; payload?: number }
) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + (action.payload || 1) };
    case "DECREMENT":
      return { value: state.value - (action.payload || 1) };
    default:
      return state;
  }
};
