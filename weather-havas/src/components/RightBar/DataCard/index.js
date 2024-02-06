import React from "react";
import "./style.css";

const DataCard = () => {
  // Define an array of card data objects
  const cardsData = [
    { id: 1, content: "Wind", title: "6 mph" },
    { id: 2, content: "Humidity", title: "69%" },
    { id: 3, content: "Real feel", title: "4°c" },
    { id: 4, content: "UV Index", title: "3" },
    { id: 5, content: "Pressure", title: "1000mb" },
    { id: 6, content: "Chance of rain", title: "92%" },
    { id: 7, content: "Sun", title: "Content 7" },
    { id: 8, content: "Moon", title: "Content 8" }
  ];
  

  return (
    <div className="container cards">
      <div className="row my-5 centerCard">
        {cardsData.map((card) => (
          <div className="col-md-4 mb-4" key={card.id}>
            <div className="card text-start">
              <div className="card-body">
                <p className="card-text">{card.content}</p>
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataCard;
