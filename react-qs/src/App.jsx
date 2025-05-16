import ClickOutsideDropdown from "./components/ClickOutsideDropdown";
import Counter from "./components/Counter";
import CustomKeyboard from "./components/CustomKeyboard";
import CustomKeyboardX from "./components/CustomKeyboardX";
import DeepClone from "./components/DeepClone";
import Flattenobjectinstructor from "./components/Flattenobjectinstructor";
import FlipCardCss from "./components/FlipCardCss";
import Formvalidation from "./components/Formvalidation";
import InlineEditableInput from "./components/InlineEditableInput";
import KeyboardModalInteraction from "./components/KeyboardModalInteraction";
import Otp from "./components/Otp";
import Otpvalidation from "./components/Otpvalidation";
import OutsideDropdown from "./components/OutsideDropdown";
import ProductList from "./components/ProductList";
import Temperature from "./components/Temperature";
import ProductProvider from "./context/product.context";

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
        {/* <br /> */}
        {/* <ClickOutsideDropdown /> */}
        {/* <br /> */}
        {/* <InlineEditableInput /> */}
        {/* <br /> */}
        {/* <Temperature /> */}
        {/* <br /> */}
        {/* <Otpvalidation /> */}
        {/* <Otp /> */}
        {/* <br /> */}
        {/* <Formvalidation /> */}
        {/* <br /> */}
        {/* <FlipCardCss /> */}
        {/* <br /> */}
        {/* <CustomKeyboard /> */}
        {/* <br /> */}
        {/* <CustomKeyboardX /> */}
        {/* <br /> */}
        {/* <Flattenobjectinstructor /> */}
        {/* <br /> */}
        {/* <KeyboardModalInteraction /> */}
        {/* <DeepClone /> */}
        <ProductProvider>
          <ProductList />
        </ProductProvider>
      </main>
    </div>
  );
}

export default App;
