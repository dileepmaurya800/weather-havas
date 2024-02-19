import React, { useState } from "react";
import "./style.css";

const SearchBar = ({searchedCity, setSearchedCity}) => {
  const [searchValue, setSearchValue] = useState("");

 
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    // setSearchedCity(event.target.value) 
  };

  const handleSearch = () => {
   
    console.log("Search value:", searchValue);
  };

  const handleKeyPress = (event) => { 
    if (event.key === "Enter") {
      handleSearch(); 
    }
  };


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
    </>
  );
};

export default SearchBar;
