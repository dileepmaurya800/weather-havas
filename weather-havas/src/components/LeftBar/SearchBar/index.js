import React, { useState } from "react";
import "./style.css"

const SearchBar = () => {
    const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  return (
    <>
      <div className="container">
        <div className="row justify-content-center my-4">
          <div className="input-group mb-3  search-box">
            <input
              type="text"
              className="form-control"
              placeholder="Search city"
              aria-label="Search city"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary border-0"
              type="button"
              id="button-addon2"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
