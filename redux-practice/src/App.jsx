import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "./store/slices/counterSlice";
import { toggleTheme } from "./store/slices/themeSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const mode = useSelector((state) => state.theme.mode);
  return (
    <>
      <div className="card">
        <h2>current theme: {mode}</h2>
        <h2>count is {count}</h2>
        <button onClick={() => dispatch(toggleTheme())}>toggle theme</button>
        <button onClick={() => dispatch(incrementCount())}>increment</button>
        <button onClick={() => dispatch(decrementCount())}>decrement</button>
      </div>
    </>
  );
}

export default App;
