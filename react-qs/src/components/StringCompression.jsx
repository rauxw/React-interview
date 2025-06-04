import { useState } from "react";

function StringCompression() {
  const [desc, setDesc] = useState("");
  const [compressDes, setCompressDes] = useState("");

  const compressedString = (str) => {
    if (!str) return "";
    let compressed = "";
    let count = 1;

    for (let i = 1; i <= str.length; i++) {
      if (str[i] === str[i - 1]) {
        count++;
      } else {
        compressed += str[i - 1] + count;
        count = 1;
      }
    }
    return compressed;
  };

  const handleCompressString = (event) => {
    const text = event.target.value;
    setDesc(text);
    const compressedResult = compressedString(text);
    setCompressDes(compressedResult);
  };

  return (
    <div className="flex flex-col justify-center items-center p-6 max-w-2xl mx-auto">
      <h1 className="m-5 text-2xl font-bold">String Compression</h1>

      <textarea
        wrap="soft"
        className="w-full h-40 p-3 border border-slate-500 rounded text-sm resize-y overflow-x-hidden"
        placeholder="Enter the string..."
        value={desc}
        onChange={handleCompressString}
      />

      <div className="mt-4 w-full p-3 border border-slate-400 bg-gray-50 rounded text-sm break-all">
        <strong>Compressed Output:</strong>
        <p className="mt-2">{compressDes || "Nothing to show"}</p>
      </div>
    </div>
  );
}

export default StringCompression;
