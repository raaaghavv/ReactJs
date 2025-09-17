import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "./store/slices/counterSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <>
      <div className="card">
        <h2>count is {count}</h2>
        <button onClick={() => dispatch(incrementCount())}>increment</button>
        <button onClick={() => dispatch(decrementCount())}>decrement</button>
      </div>
    </>
  );
}

export default App;
