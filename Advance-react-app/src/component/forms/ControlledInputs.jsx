import React, { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(name, email);
  }
//   const handleChange = (e) => {
//     setName(e.target.value);
//     setEmail(e.target.value);
//   };
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </>
  );
};

export default ControlledInputs;
