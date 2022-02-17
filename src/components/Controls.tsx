import { FC } from "react";
import { useDispatch } from "../redux/react-redux";

const Controls: FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        Increase by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        Decrease by 5
      </button>
    </div>
  );
};

export default Controls;
