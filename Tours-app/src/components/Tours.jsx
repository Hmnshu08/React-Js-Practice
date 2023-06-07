import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          // const { id, image, info, name, price } = tour;
          // console.log(tour);
          return <Tour key={tour.id} {...tour} removeTour={removeTour}/>;
        })}
      </div>
    </>
  );
};

export default Tours;
