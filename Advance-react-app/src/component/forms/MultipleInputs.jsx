import React, { useState } from "react";

const MultipleInputs = () => {
  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  const handleChange = (e) => {
    console.log(e.target.name);
    setUser({ ...user, [e.target.name]: e.target.value });//dynamically assigning values.. in multiple inputs
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h3>Controlled Inputs</h3>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name :
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={user.name}
            onChange={handleChange}
            name="name"
          ></input>
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email :
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={user.email}
            onChange={handleChange}
            name="email"
          ></input>
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password :
          </label>
          <input
            type="password"
            id="password"
            className="form-input"
            value={user.password}
            onChange={handleChange}
            name="password"
          ></input>
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </>
  );
};

export default MultipleInputs;
