import React, { useEffect, useState } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
    // console.log(value)
  const sayHello = () => {
    console.log("Hello");
  };
  useEffect(() => {
    console.log("Hello from useEffect");
  },[]);
  return (
    <>
      <h2>UseEffectBasics</h2>
      <h1>Count : {value}</h1>
      <button type="button " className="button" onClick={()=>setValue(value+1)}>Increase</button>
    </>
  );
};

export default UseEffectBasics;
