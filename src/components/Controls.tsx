import { FC } from "react";
import { useDispatch } from "../redux/react-redux";

const Controls: FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increase</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrease</button>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>
        Increase by 5
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>
        Decrease by 5
      </button>
    </div>
  );
};

export default Controls;
