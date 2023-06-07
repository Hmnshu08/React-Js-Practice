import React, { useEffect, useState } from "react";

const ConditionalRender = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return <h1>Conditional Render Example</h1>;
};

export default ConditionalRender;
