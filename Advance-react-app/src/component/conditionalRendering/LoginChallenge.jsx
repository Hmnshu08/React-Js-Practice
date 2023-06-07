import React, { useState } from "react";

const LoginChallenge = () => {
  const [user, setUser] = useState(null);

  const Login = () => {
    setUser({ name: "Hmnshu" });
  };

  const LogOut = () => {
    setUser(null);
  };
  return (
    <div>
      {user ? (
        <div>
          <h2>Hello {user.name}</h2>
          <button type="button" onClick={LogOut}>
            LogOut
          </button>
        </div>
      ) : (
        <div>
          <h3>Please LogIn </h3>
          <button type="button" onClick={Login}>
            LogIn
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginChallenge;
