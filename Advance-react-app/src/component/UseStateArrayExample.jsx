import React, { useState } from "react";
import { data } from "../data";
const UseStateArrayExample = () => {
  const [people, setPeople] = useState(data);
  // console.log(people);
  const removeItem = (id) => {
    console.log(id);
    const newPeople = people.filter((person)=>person.id!==id);
    setPeople(newPeople);
  };
  const clearAllItem = () => {
    setPeople([])
  };

  return (
    <div>
      <div>
        <h2>UseStateArrayExample</h2>
      </div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <button type="button" onClick={()=>removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button type="button" className="btn" style={{marginTop:'2rem'}} onClick={clearAllItem}>Clear All</button>
    </div>
  );
};

export default UseStateArrayExample;
