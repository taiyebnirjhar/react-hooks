import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const addOne = () => {
    setCounter((prevState) => prevState + 1);
  };

  const minusOne = () => {
    setCounter((prevState) => prevState - 1);
  };

  return (
    <div className="flex flex-row gap-5 mx-4">
      <div>counter: {counter}</div>
      <div>
        <button onClick={addOne}>Add 1</button>
      </div>
      <div>
        <button onClick={minusOne}>Minus 1</button>
      </div>
    </div>
  );
}

export default Counter;
