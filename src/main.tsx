import "./index.css";

import App from "./App";
import { Provider } from "./redux/react-redux";
import ReactDOM from "react-dom";
import { countReducer } from "./store";
import { createStore } from "./redux/redux";

const store = createStore(countReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
