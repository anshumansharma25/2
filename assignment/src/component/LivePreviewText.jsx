import React, { useState } from "react";

export default function LivePreviewText() {
    const [text, setText] = useState("");
    return (
      <div className="flex justify-center items-center w-screen h-screen bg-gray-100">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl space-y-6">
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            Type Below:
          </h2>

          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Start typing..."
            className="w-full border border-gray-300 text-black rounded-md px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <h2 className="text-xl font-semibold text-gray-700">Live Preview:</h2>

          <textarea
            value={text}
            readOnly
            className="w-full h-32 border text-black border-gray-300 rounded-md px-4 py-2 text-base resize-none bg-gray-50 focus:outline-none"
          />
        </div>
      </div>
    );
}
