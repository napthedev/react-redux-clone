import Controls from "./components/Controls";
import { FC } from "react";
import View from "./components/View";

const App: FC = () => {
  return (
    <div>
      <p>
        <strong>View</strong> component
      </p>
      <View />

      <p>
        <strong>Controls</strong> component
      </p>
      <Controls />
    </div>
  );
};

export default App;
