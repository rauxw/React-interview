import { useState, useEffect, useRef } from "react";
import Card from "../ui/Card";

function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);
  const handler = useRef();

  useEffect(() => {
    if (handler.current) {
      clearTimeout(handler.current);
    }
    handler.current = setTimeout(() => {
      setDebounceValue(value);
    });
    return () => clearTimeout(handler.current);
  }, [value, delay]);

  return debounceValue;
}

const DebounceApi = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const debounceTerm = useDebounce(searchTerm, 500);

  async function fetchListOfProducts(debounceTerm) {
    setIsLoading(true);
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${debounceTerm}`
    );
    const products = await res.json();

    if (products) {
      setResult(products?.products);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setResult([]);
    }
  }

  useEffect(() => {
    if (!debounceTerm.trim()) {
      setResult([]);
      return;
    }
    fetchListOfProducts(debounceTerm);
  }, [debounceTerm]);

  console.log(result);

  return (
    <div className="flex flex-col justify-center items-center bg-gray-50">
      <h1 className="text-2xl">Debounce Search API CALL</h1>
      <div className="flex flex-col gap-5 mt-5">
        <label className="flex gap-3 text-2xl p-5">
          Search Product:
          <input
            className="bg-gray-50 border rounded text-center"
            type="text"
            placeholder="search product"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
        </label>
        <div className="flex flex-col gap-5 mt-5 justify-center items-center">
          {isLoading && <div className="text-2xl">Loading Data</div>}
          {!isLoading &&
            result?.map((product) => (
              <div
                key={product.id}
                className="flex flex-col justify-center items-center m-5 bg-white shadow-md rounded-lg overflow-hidden p-5"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {product.description}
                </p>
                <p className="text-xl font-bold mt-3 text-gray-800">
                  ${product.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DebounceApi;
