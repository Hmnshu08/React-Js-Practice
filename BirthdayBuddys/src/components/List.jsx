import React from "react";
import Person from "./person";

const List = ({people}) => {
//   console.log(people);
  return (
    <div>
      <section>
        {people.map((person) => {
          return <Person key={person.id} {...person}/>
        })}
      </section>
    </div>
  );
};

export default List;
