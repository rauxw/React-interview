import { useState } from "react";

function Temperature() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const celsiusToFahrenheit = (value) => {
    return (value * 9) / 5 + 32;
  };

  const fahrenheitToCelsius = (value) => {
    return ((value - 32) * 5) / 9;
  };

  const formatValue = (value) => {
    if (value === "") return "";
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return value;
    if (Number.isInteger(numValue)) {
      return numValue.toString();
    }
    return numValue.toFixed(2);
  };

  const handleCelsiusToFahrenheit = (value) => {
    setCelsius(value);
    if (value === " ") {
      setFahrenheit("");
    } else {
      const numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        const res = celsiusToFahrenheit(numValue);
        setFahrenheit(res.toFixed(2));
      }
    }
  };
  const handleFahrenheitToCelsius = (value) => {
    setFahrenheit(value);
    if (value === " ") {
      setCelsius("");
    } else {
      const numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        const res = fahrenheitToCelsius(numValue);
        setCelsius(res.toFixed(2));
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl">Temperature Converter</h1>
      <div className="flex flex-col justify-center items-center  mt-5">
        <div className="flex gap-12 mb-3">
          <label className="text-xl font-bold">Celsius :</label>
          <input
            className="border rounded text-center"
            id="celsius"
            type="number"
            value={formatValue(celsius)}
            onChange={(event) => handleCelsiusToFahrenheit(event.target.value)}
            placeholder="0"
          />
        </div>
        <div className="flex gap-5 mt-3">
          <label className="text-xl font-bold">Fahrenheit :</label>
          <input
            className="border rounded text-center"
            id="fahrenheit"
            type="number"
            value={formatValue(fahrenheit)}
            onChange={(event) => handleFahrenheitToCelsius(event.target.value)}
            placeholder="32"
          />
        </div>
      </div>
    </div>
  );
}

export default Temperature;
