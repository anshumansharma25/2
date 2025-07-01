import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-md p-8 w-72 flex flex-col items-center space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Counter</h2>

        <div className="text-4xl font-bold text-blue-600">{count}</div>

        <div className="flex gap-4">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded-full text-lg"
          >
            +
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded-full text-lg"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
