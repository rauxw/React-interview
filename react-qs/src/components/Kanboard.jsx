import { useState } from "react";

function Kanboard() {
  const [columns, setColumns] = useState({
    todo: ["Dance", "Walk"],
    inProgress: ["Read for 4 hours"],
    done: ["Walk your Dog"],
  });

  const [dragging, setDragging] = useState(null);

  const onDragStart = (currentTask, currentColumnId) => {
    setDragging({ currentTask, currentColumnId });
  };

  const onDrop = (target) => {
    if (!target) return;
    if (dragging.currentColumnId === target) return;
    setColumns((prev) => {
      const sourceItems = prev[dragging.currentColumnId].filter(
        (item) => item !== dragging.currentTask
      );
      const targetItems = [...prev[target], dragging.currentTask];
      return {
        ...prev,
        [dragging.currentColumnId]: sourceItems,
        [target]: targetItems,
      };
    });
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl">Kanab Board</h1>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl">
        {Object.entries(columns).map(([columnId, tasks]) => (
          <div
            key={columnId}
            onDragOver={onDragOver}
            onDrop={() => onDrop(columnId)}
            className="w-full text-center rounded-md border p-4 bg-white shadow"
          >
            <h3 className="font-medium capitalize">{columnId}</h3>
            {tasks.map((task) => (
              <div
                key={task}
                className="border m-2 p-2 bg-gray-200 rounded-md cursor-move"
                draggable
                onDragStart={() => onDragStart(task, columnId)}
              >
                {task}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kanboard;
