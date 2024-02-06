import React from "react";
import SearchBar from "./SearchBar";
import "./style.css";

const LeftBar = ({ data }) => {

const weatherData = data?.data?.length > 0 ? data?.data[0] : null;

  return (
    <>
      <div className="col-md-4 bg-left-box ">
        <SearchBar />
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
