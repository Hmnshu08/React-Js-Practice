import { useState, useEffect } from "react";
const url = "https://course-api.com/react-tours-project";
// import "./App.css";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

function App() {
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      const tours = await response.json();
      setIsLoading(false);
      setTours(tours);
      console.log(tours);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    setInterval(() => {
      setIsLoading(false);
    }, 4000);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isloading) {
    return (
      <main>
        <Loading />;
      </main>
    );
  }

  if (isError) {
    return (
      <main>
        <h1>There was an Error in loading...</h1>
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button type="button" className="btn" onClick={() => fetchData()} style={{margin:'1rem'}}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
