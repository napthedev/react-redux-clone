type Reducer = (state: any, action: any) => any;

export const createStore = <T extends Reducer>(
  reducer: T
): {
  subscribe: (listener: Function) => () => void;
  dispatch: (action: Parameters<T>[1]) => void;
  getState: () => Parameters<T>[0];
} => {
  let listeners: Function[] = [];
  let state = reducer(undefined, {});

  const subscribe = (listener: Function) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((item) => item !== listener);
    };
  };

  const dispatch = (action: Parameters<T>[1]) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const getState = () => {
    return state;
  };

  return { subscribe, dispatch, getState };
};
