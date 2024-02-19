import React, { useState } from "react";
// import SearchBar from "./SearchBar";
import "./style.css";

const LeftBar = ({ data, setSearchedCity }) => {
  const [searchValue, setSearchValue] = useState("");

 
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    // setSearchedCity(event.target.value) 
  };

  const handleSearch = () => {
    setSearchedCity(searchValue)
    console.log("Search value:", searchValue);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(); 
    }
  };


const weatherData = data?.data?.length > 0 ? data?.data[0] : null;

  return (
    <>
      <div className="col-md-4 bg-left-box ">
      <div className="container">
        <div className="row justify-content-center my-4">
          <div className="input-group mb-3  search-box">
            <input
              type="text"
              className="form-control"
              placeholder="Search city"
              aria-label="Search city"
              aria-describedby="button-addon2"
              value={searchValue} 
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />

            <button
              className="btn btn-outline-secondary border-0"
              type="button"
              id="button-addon2"
              onClick={handleSearch} 
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
        {/* <SearchBar setSearchedCity={setSearchedCity} searchedCity={searchedCity} /> */}
        <div className="row my-5 justify-content-center text-center ">
          <div className=" w-50 border-0">
            <i
              className={`fa-solid fa-cloud text-color`}
              style={{ fontSize: "200px" }}
            ></i>
            <h1 className="temp text-color">{weatherData?.temp}&deg;C</h1>
            <h6 className="heading text-color">
              {weatherData?.weather?.description}
            </h6>
            <div className="my-5 centered-line"></div>
            <p className="heading text-color">{weatherData?.valid_date}</p>
            {/* <i
              className="fa-solid fa-cloud text-color"
              style={{ fontSize: "200px" }}
            ></i> */}
           
            <h4 className="headingPlace text-color my-5">{data?.city_name}, {data?.country_code}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftBar;
