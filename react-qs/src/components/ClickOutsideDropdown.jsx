import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import { useRef, useState } from "react";

function ClickOutsideDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        console.log(event.target, dropdownRef.current);
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="flex flex-col items-center justify-center mt-10 bg-gray-300">
      <h1 className="text-2xl font-bold mb-6">
        Close Dropdown On Outside Click
      </h1>
      <div className="relative w-64" ref={dropdownRef}>
        <button
          className="flex w-full items-center justify-between border border-gray-300 p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="text-gray-700">Select an Option</span>
          <ChevronDown
            className={`ml-2 h-5 w-5 text-gray-500 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white border border-gray-200 z-10">
            <div className="flex flex-col">
              {["Option 1", "Option 2", "Option 3"].map((option, index) => (
                <button
                  key={index}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClickOutsideDropdown;
