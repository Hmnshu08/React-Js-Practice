import React, { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setSlowAlert] = useState(false);

  const ToggleAlert = () => {
    if (showAlert) {
      setSlowAlert(false);
      return;
    }
    setSlowAlert(true);
  };

  return (
    <div>
      <button className="btn" onClick={ToggleAlert}>Toggle</button>
      {showAlert && <Alert />}
    </div>
  );
};
const Alert = () => {
  return <div className="alert alert-danger">This is a Alert</div>;
};

export default ToggleChallenge;
