import { useState } from "react";

export default function Test() {
  const [state, setState] = useState("Ini State");

  function handleChange() {
    setState((e) => e.terget.value);
  }

  function handleClick() {}

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-80 h-80 bg-slate-600 flex justify-center items-center flex-col">
        <input
          type="text"
          className="border-2 rounded-lg"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
        {state}
      </div>
    </div>
  );
}
