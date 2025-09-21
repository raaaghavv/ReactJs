import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import counterReducer from "./slices/counterSlice";
import themeReducer from "./slices/themeSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});

export const CounterProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
