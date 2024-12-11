import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="my-2 flex flex-wrap w-screen items-center justify-evenly"
      style={{ backgroundColor: color }}
    >
      <button onClick={() => setColor("orange")} className="text-orange-500">
        orange
      </button>
      <button onClick={() => setColor("green")} className="text-green-200">
        green
      </button>
      <button onClick={() => setColor("blue")} className="text-blue-300">
        blue
      </button>
      <button onClick={() => setColor("cyan")} className="text-cyan-300">
        turquoise
      </button>
      <button onClick={() => setColor("brown")} className="text-amber-600">
        brown
      </button>
      <button onClick={() => setColor("black")} className="text-white">
        black
      </button>
    </div>
  );
}

export default App;
