import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import counterReducer from "./slices/counterSlice";
import themeReducer from "./slices/themeSlice";
import jokeReducer from "./slices/jokeSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    joke: jokeReducer,
  },
});

export const CounterProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
