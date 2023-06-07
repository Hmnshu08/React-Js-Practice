import React, { useEffect, useState } from "react";
const url = "https://api.github.com/users";
import "./example.css";
const UseEffectFetchExample = () => {
  const [user, setUser] = useState([]);
  //useffect will render once.
  useEffect(() => {
    //declaring a func fetchData with async
    const fetchData = async () => {
      try {
        const response = await fetch(url); //await makes function pause the exe and wait for the promise.
        const users = await response.json(); // coverting response in json
        setUser(users); // setting  it on users
        // console.log(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(); // calling function
  }, []);

  return (
    <>
      <h1>useEffectFetchExample</h1>
      <div className="section">
        <h2>Github Users list</h2>
        <ul>
          {user.map((user) => {
            const { id, login, avatar_url, html_url } = user;
            console.log(user);
            return (
              <li key={id}>
                <img src={avatar_url} alt={login}></img>
                <div className="name">
                  <h3>{login}</h3>
                </div>
                <a href={html_url}>Profile</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default UseEffectFetchExample;
