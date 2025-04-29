import { useState } from "react";
import { Minus, Plus, Redo2, Undo2 } from "lucide-react";

function Counter() {
  const [history, setHistory] = useState([0]);
  const [position, setPosition] = useState(0);
  const currentValue = history[position];

  const addValueToHistory = (newValue) => {
    const newHistory = history.slice(0, position + 1);
    setHistory([...newHistory, newValue]);
    setPosition((prev) => prev + 1);
  };

  const decrement = () => addValueToHistory(currentValue - 1);
  const increment = () => addValueToHistory(currentValue + 1);

  const undo = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

  const redo = () => {
    if (position < history.length - 1) {
      setPosition(position + 1);
    }
  };

  return (
    <div className="flex justify-center items-center mt-5 flex-col">
      <h1 className="text-2xl">Counter with Undo and Redo</h1>
      <div className="flex flex-col justify-center items-center mt-5 mb-5">
        <div>
          <div className="text-5xl">{currentValue}</div>
        </div>
        <div className="flex justify-center items-center">
          {" "}
          <button className="m-2 hover:bg-gray-600 p-3 " onClick={decrement}>
            <Minus className="h-5 w-5 hover:text-white" />
          </button>
          <button className="m-2 hover:bg-gray-600 p-3" onClick={increment}>
            <Plus className="h-5 w-5 hover:text-white" />
          </button>
        </div>
        <div className="flex justify-center items-center">
          {" "}
          <button
            disabled={position === 0}
            onClick={undo}
            className="m-2 hover:bg-gray-600 p-3"
          >
            Undo <Undo2 className="h-5 w-5 hover:text-white" />
          </button>
          <div className="text-xl text-muted-foreground">
            {position + 1} / {history.length}
          </div>
          <button
            disabled={position === history.length}
            onClick={redo}
            className="m-2 hover:bg-gray-600 p-3"
          >
            Redo <Redo2 className="h-5 w-5 hover:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
