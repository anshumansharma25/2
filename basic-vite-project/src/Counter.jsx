import "./Counter.css";
import { useState } from "react";

export default function Counter() {
  let [value, setvalue] = useState(0);

  return (
    <div className="card">
      Counter
      <div className="count">
        <button
          onClick={() => {
            if (value <= 0) {
              setvalue((value = 0));
              console.log(value);
            }
            else
            setvalue(value - 1);
          }}
        >
          -
        </button>
        <div>{value}</div>
        <button
          onClick={() => {
            if (value >= 20) {
              setvalue((value = 20));
            }
            else
            setvalue(value + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
