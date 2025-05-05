import { useRef, useState } from "react";

function CustomKeyboard() {
  const tabs = [
    { id: "tab1", title: "Dashboard", content: "Admin Dashboard" },
    { id: "tab2", title: "Products", content: "Admin Products" },
    { id: "tab3", title: "Settings", content: "Admin Settings" },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const tabListRef = useRef(null);

  const handleTabClick = (index) => {
    setActiveTab(index);
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
    <div className="flex flex-col justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Custom Tab with Keyboard Interaction
      </h1>

      <div className="w-full max-w-2xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Tabs */}
        <div
          ref={tabListRef}
          role="tablist"
          aria-orientation="horizontal"
          className="flex border-b border-gray-300"
          onKeyDown={handleKeyDown}
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={activeTab === index}
              aria-controls={`panel-${tab.id}`}
              tabIndex={activeTab === index ? 0 : -1}
              className={`flex-1 px-4 py-3 text-sm font-medium text-center focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                activeTab === index
                  ? "border-b-2 border-blue-600 text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div
          className="p-6"
          role="tabpanel"
          id={`panel-${tabs[activeTab].id}`}
          aria-labelledby={`tab-${tabs[activeTab].id}`}
        >
          <p className="text-lg text-gray-700">{tabs[activeTab].content}</p>
        </div>
      </div>
    </div>
  );
}

export default CustomKeyboard;
