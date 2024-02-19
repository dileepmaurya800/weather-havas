import React from "react";
import "./style.css";

const DataCard = ({data}) => {

  const cardsData = [
    { id: 1, lower_content: `${data?.wind_cdir_full}`, upper_content: "Wind", title: `${data?.wind_spd} mph` },
    { id: 2, lower_content: "", upper_content: "Humidity", title: `${data?.rh}%` },
    { id: 3, lower_content: "", upper_content: "Real feel", title: `${data?.app_max_temp}°c` },
    { id: 4, lower_content: "Moderate", upper_content: "UV Index", title: `${data?.uv}` },
    { id: 5, lower_content: "", upper_content: "Pressure", title: `${data?.pres}mb` },
    { id: 6, lower_content: "", upper_content: "Chance of rain", title: `${data?.pop}%` },
    { id: 7, lower_content: "Wind", upper_content: "Sun", title: "Content 7" },
    { id: 8, lower_content: "Wind", upper_content: "Moon", title: "Content 8" }
  ];
  

  return (
    <div className="container cards">
      <div className="row my-5 centerCard">
        {cardsData.map((card) => (
          <div className="col-md-4 mb-4" key={card.id}>
            <div className="card text-start">
              <div className="card-body">
                <p className="card-text">{card.upper_content}</p>
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.lower_content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataCard;
