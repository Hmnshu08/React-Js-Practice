import { useState } from "react";
import data from "./data";
import List from "./components/List";

// import './App.css'

function App() {
  const [people, setpeople] = useState(data);
  // console.log(people);
  const clearAllItems =()=>{
    setpeople([]);
  }
  return (
    <main>
      <section className="container">
        <h2>{people.length} Birthday Today </h2>
        <List people = {people} />
        <button className="btn" onClick={clearAllItems}>clear</button>
        {/* {()=>{setpeople([])}} */}
      </section>
    </main>
  );
}

export default App;
