import { useEffect, useRef, useState } from "react";

function OutsideDropdown() {
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
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-64" ref={dropdownRef}>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <span>Select an Option</span>
        </button>
        {isOpen && (
          <div>
            <div>
              {["Option 1", "Option 2", "Option 3"].map((option, index) => {
                return <button key={index}>{option}</button>;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OutsideDropdown;
