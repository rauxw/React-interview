import { useState } from "react";

function Flattenobjectinstructor() {
  const [input, setInput] = useState("");
  const [flatten, setFlatten] = useState(null);

  const flattenObject = (obj, parentKey = "", result = {}) => {
    for (let key in obj) {
      const path = parentKey ? `${parentKey}.${key}` : key;
      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        flattenObject(obj[key], path, result);
      } else {
        result[path] = obj[key];
      }
    }
    return result;
  };

  const handleParse = () => {
    try {
      const parsedResult = JSON.parse(input);
      const flatRes = flattenObject(parsedResult);
      setFlatten(flatRes);
      console.log(flatRes);
    } catch (error) {
      console.error("Invalid JSON input:", error);
      setFlatten(null);
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center p-4 ">
      <div className="bg-white rounded-xl shadow-md w-full max-w-4xl p-6">
        <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Flatten Object Inspector
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Input JSON
            </label>
            <textarea
              className="w-full h-64 p-4 border border-gray-300 text-sm rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your JSON here"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <button
              onClick={handleParse}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition hover:cursor-pointer"
            >
              Flatten
            </button>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Flattened Output
            </label>
            <div className="w-full h-64 overflow-auto bg-gray-50 border border-gray-300 text-sm rounded-md p-4">
              {flatten ? (
                <table className="min-w-full text-left text-sm text-gray-700">
                  <thead>
                    <tr>
                      <th className="border-b font-medium p-2">Key</th>
                      <th className="border-b font-medium p-2">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(flatten).map(([key, value]) => (
                      <tr key={key}>
                        <td className="border-b p-2 align-top break-all font-mono">
                          {key}
                        </td>
                        <td className="border-b p-2 align-top break-all font-mono">
                          {String(value)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-gray-500">No output yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flattenobjectinstructor;
