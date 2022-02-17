import { FC, createContext, useContext, useEffect, useState } from "react";

import { createStore } from "./redux";

type Store = ReturnType<typeof createStore>;

const StoreContext = createContext<Store | null>(null);

export const Provider: FC<{ store: Store }> = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useSelector = (selector: (state: any) => any) => {
  const store = useContext(StoreContext) as Store;

  const [value, setValue] = useState(selector(store.getState()));

  useEffect(() => {
    store.subscribe(() => {
      setValue(selector(store.getState()));
    });
  }, []);

  return value;
};

export const useDispatch = () => {
  const store = useContext(StoreContext) as Store;

  return store.dispatch;
};
