import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export const CounterProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
