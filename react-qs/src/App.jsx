import ClickOutsideDropdown from "./components/ClickOutsideDropdown";
import Counter from "./components/Counter";
import CustomKeyboard from "./components/CustomKeyboard";
import FlipCardCss from "./components/FlipCardCss";
import Formvalidation from "./components/Formvalidation";
import InlineEditableInput from "./components/InlineEditableInput";
import Otp from "./components/Otp";
import Otpvalidation from "./components/Otpvalidation";
import OutsideDropdown from "./components/OutsideDropdown";
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
        {/* <Counter />
          <br />
          <ClickOutsideDropdown />
          <br />
          <InlineEditableInput />
          <br />
          <Temperature />
          <br />
          <Otpvalidation />
          <Otp />
          <br />
          <Formvalidation /> */}
        {/* <FlipCardCss /> */}
        {/* <CustomKeyboard /> */}
      </main>
    </div>
  );
}

export default App;
