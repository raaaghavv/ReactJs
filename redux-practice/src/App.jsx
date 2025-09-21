import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "./store/slices/counterSlice";
import { toggleTheme } from "./store/slices/themeSlice";
import { fetchJokes } from "./store/slices/jokeSlice";

function App() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.count);
  const mode = useSelector((state) => state.theme.mode);
  const jokeData = useSelector((state) => state.joke.jokeData);
  const error = useSelector((state) => state.joke.error);
  const isLoading = useSelector((state) => state.joke.isLoading);
  const isError = useSelector((state) => state.joke.isError);

  return (
    <>
      <div className="card">
        <h2>current theme: {mode}</h2>
        <h2>count is {count}</h2>
        <button onClick={() => dispatch(toggleTheme())}>toggle theme</button>
        <button onClick={() => dispatch(incrementCount())}>increment</button>
        <button onClick={() => dispatch(decrementCount())}>decrement</button>
        <button onClick={() => dispatch(fetchJokes())}>fetch jokes</button>
        {isLoading && <div>loading...</div>}
        {isError && <div>{error.message}</div>}
        {Object.keys(jokeData).length > 0 && (
          <ul>
            {jokeData.jokes.map((jokeObj, indx) => (
              <li key={indx}>{jokeObj.joke}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
