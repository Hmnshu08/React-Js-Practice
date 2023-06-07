import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if(!response.ok){
            setIsError(true);
            setIsLoading(false);
            return;
        }
        const person = await response.json();
        setPerson(person);
        console.log(person);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setInterval(() => {
        setIsLoading(false);
      }, 1000);
    };
    fetchData();
  }, []);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 3000);
  //   }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an Error in loading...</h2>;
  }

  return (
    <>
      <img
        src={person.avatar_url}
        alt={person.name}
        style={{ width: "250px", borderRadius: "2rem" }}
      ></img>
      <h2>{person.name}</h2>
      <h4>{person.bio}</h4>
      <p style={{fontWeight:'bold'}}>{person.company}</p>
    </>
  );x
};

export default MultipleReturns;
