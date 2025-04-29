import { useEffect, useRef, useState } from "react";
import { Pencil } from "lucide-react";

function InlineEditableInput() {
  const [items, setItems] = useState([
    { id: 1, text: "Hello" },
    { id: 2, text: "Gangster" },
    { id: 3, text: "KingPing" },
    { id: 4, text: "Spiderman" },
  ]);

  const [currentEditedID, setCurrentEditedID] = useState(null);
  const [currentEditedValue, setCurrentEditedValue] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (currentEditedID !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentEditedID]);

  const handleEdit = (id, text) => {
    setCurrentEditedID(id);
    setCurrentEditedValue(text);
  };

  const handleBlur = () => {
    if (currentEditedID !== null) {
      saveChanges();
    }
  };

  const handleKeyDown = (event) => {
    console.log(event.key);
    if (event.key === "Enter") {
      saveChanges();
    } else if (event.key === "Escape") {
      setCurrentEditedID(null);
    }
  };

  const saveChanges = () => {
    if (currentEditedID !== null) {
      setItems(
        items.map((item) =>
          item.id === currentEditedID
            ? { ...item, text: currentEditedValue }
            : item
        )
      );
      setCurrentEditedID(null);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-2xl mb-2">Inline Editable Input</h1>
      {items.map((item, index) =>
        currentEditedID === item.id ? (
          <input
            type="text"
            className="bg-stone-300 p-3 rounded-xl shadow"
            ref={inputRef}
            value={currentEditedValue}
            onChange={(event) => {
              setCurrentEditedValue(event.target.value);
            }}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <div
            onClick={() => handleEdit(item.id, item.text)}
            className="flex justify-between m-2 bg-stone-400 shadow p-3 rounded-xl"
            key={index}
          >
            <span>{item.text}</span>
            <Pencil className="h-4 w-4 opacity-0 hover:opacity-100" />
          </div>
        )
      )}
    </div>
  );
}

export default InlineEditableInput;
