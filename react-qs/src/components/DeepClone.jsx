import { useState } from "react";

const deepClone = (obj) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  const clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    clone[key] = deepClone(obj[key]);
  }
  return clone;
};
function DeepClone() {
  const [input, setInput] = useState("");
  const [original, setOriginal] = useState(null);
  const [cloned, setCloned] = useState(null);

  const handleDeepClone = () => {
    try {
      const parseObj = JSON.parse(input);
      setOriginal(parseObj);
      const cloneObj = deepClone(parseObj);
      setCloned(cloneObj);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-3 p-5 rounded bg-slate-200">
      <h1 className="text-3xl">Deep Clone</h1>
      <div className="flex flex-col justify-center items-center mt-5">
        <textarea
          className="w-full h-32 p-3 border border-gray-500 rounded text-xl resize-none"
          placeholder="Place json here...."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button
          onClick={handleDeepClone}
          className="m-3 pl-1 pr-1 pt-2 pb-2 bg-slate-300 rounded hover:text-white hover:bg-slate-500 shadow-xl"
        >
          Start Deep Clone
        </button>
        <div className="flex flex-col gap-5">
          <div>
            {" "}
            {original && (
              <div>
                <h3>Original Object</h3>
                <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded text-sm">
                  {JSON.stringify(original, null, 2)}
                </pre>
              </div>
            )}
          </div>
          {cloned && (
            <div>
              <h3>Cloned Object</h3>
              <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded text-sm">
                {JSON.stringify(cloned, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DeepClone;
