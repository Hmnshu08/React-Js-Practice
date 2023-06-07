import React, { useState } from "react";

const UseStateExample = () => {
  // let count = 0;
  const [count, setCount] = useState(0);

  const handleChange = () => {
    // setCount(count + 1);
    setTimeout(
      () =>
        setCount((currentState) => {
          const newState = currentState + 1; //gets new updated value
          console.log(newState);
          return newState;
        }),
      2000
    );
  };

  return (
    <div>
      <h2>UseState Example</h2>
      <h3>{count}</h3>
      <button type="button" className="btn" onClick={handleChange}>
        Increase
      </button>
    </div>
  );
};

export default UseStateExample;
