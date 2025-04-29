import ClickOutsideDropdown from "./components/ClickOutsideDropdown";
import Counter from "./components/Counter";
import InlineEditableInput from "./components/InlineEditableInput";
import Temperature from "./components/Temperature";

function App() {
  return (
    <div className="flex flex-col bg-gray-300 justify-center items-center">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold">React Questions</h1>
        </div>
      </header>
      <main>
        {/* <Counter /> */}
        {/* <ClickOutsideDropdown /> */}
        {/* <InlineEditableInput /> */}
        <Temperature />
      </main>
    </div>
  );
}

export default App;
