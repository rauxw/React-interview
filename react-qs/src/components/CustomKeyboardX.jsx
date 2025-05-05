import { useRef, useState } from "react";

function CustomKeyboardX() {
  const tabs = [
    { id: "tab1", title: "DashBoard", content: "Admin Dashboard" },
    { id: "tab2", title: "Products", content: "Admin Products" },
    { id: "tab3", title: "Settings", content: "Admin  Settings" },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const tabListRef = useRef(null);
  const handleTabClick = (index) => {
    setActiveTab(index);
    console.log(activeTab);
  };
  const handleKeyDown = (event) => {
    console.log(event.key);
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        setActiveTab((prev) => (prev < tabs.length - 1 ? prev + 1 : prev));
        break;
      case "ArrowLeft":
        event.preventDefault();
        setActiveTab((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      default:
        break;
    }
  };
  return (
    <div className="flex flex-col">
      <div className="flex" ref={tabListRef} onKeyDown={handleKeyDown}>
        {tabs.map((tab, index) => {
          return (
            <button
              key={tab.id}
              aria-controls={`panel-${tab.id}`}
              aria-selected={activeTab === index}
              className={`flex-1 px-4 py-3 text-sm font-medium text-center focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                activeTab === index
                  ? "border-b-2 border-blue-600 text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </button>
          );
        })}
      </div>
      <div className="mt-5 text-center">
        <p>{tabs[activeTab].content}</p>
      </div>
    </div>
  );
}

export default CustomKeyboardX;
