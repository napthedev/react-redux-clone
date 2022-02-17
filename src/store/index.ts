export const countReducer = (
  state = { value: 0 },
  action: { type: "increment" | "decrement"; payload?: number }
) => {
  switch (action.type) {
    case "increment":
      return { value: state.value + (action.payload || 1) };
    case "decrement":
      return { value: state.value - (action.payload || 1) };
    default:
      return state;
  }
};
