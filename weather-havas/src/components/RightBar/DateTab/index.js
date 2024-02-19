import React, { useState, lazy, Suspense, useEffect } from "react";
import "./style.css";
const DataCard = lazy(() => import("../DataCard"));

const DateTab = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [weatherData, setWeatherData] = useState();

  const handleTabClick = (item) => {
    setActiveTab(item.index);
    setWeatherData(item.date);
  };

  useEffect(() => {
    setActiveTab(0);

    if (data?.data?.length > 0) {
      setWeatherData(data.data[0]);
    }
  }, [data]);

  return (
    <>
      <div className="tabs my-4">
        {data?.data?.slice(0, 4)?.map((date, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick({ index, date })}
          >
            {date.datetime}
          </div>
        ))}
      </div>

      <div className="tab-content">
        <Suspense fallback={<div>Loading...</div>}>
          {activeTab === 0 && <DataCard data={weatherData} />}
          {activeTab === 1 && <DataCard data={weatherData} />}
          {activeTab === 2 && <DataCard data={weatherData} />}
          {activeTab === 3 && <DataCard data={weatherData} />}
        </Suspense>
      </div>
    </>
  );
};

export default DateTab;
