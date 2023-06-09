import React, { useState } from "react";
import { data } from "./data";
const ControlledInputChallenge = () => {
  const [people, setPeople] = useState(data);
  const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    const someID = Date.now();
    const newUser = { id: someID, name };
    const updatePeople = [...people, newUser];
    // console.log(updatePeople);
    setPeople(updatePeople);
    setName("");
  };

  const removeUser = (id) => {
    const updatePeople = people.filter((user) => user.id !== id);
    setPeople(updatePeople);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h3 style={{ margin: "1rem" }}>Controlled Inputs</h3>
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
        {/* <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email :
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div> */}
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
      <h2 style={{ margin: "1rem" }}>Users</h2>
      {people.map((user) => {
        const { id, name } = user;
        //   console.log(user);
        return (
          <div key={id}>
            <h4  style={{ lineHeight: "2rem" }}>
              {name}
            </h4>
            <button
              onClick={() => {
                removeUser(id);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ControlledInputChallenge;
