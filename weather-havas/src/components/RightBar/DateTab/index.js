import React, { useState, lazy, Suspense } from "react";
import "./style.css";
const DataCard = lazy(() => import("../DataCard"));

const DateTab = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  console.log(data.data);

  const dates = ["Today", "Tue 7th Feb", "Wed 8th Feb", "Thu 9th Feb"];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="tabs my-4">
        {dates.map((date, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {date}
          </div>
        ))}
      </div>
      <div className="tab-content">
        <Suspense fallback={<div>Loading...</div>}>
          {activeTab === 0 && (
            <div>
              <DataCard data={data} />
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <DataCard data={data} />
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <DataCard data={data} />
            </div>
          )}
          {activeTab === 3 && (
            <div>
              <DataCard data={data} />
            </div>
          )}
        </Suspense>
      </div>
    </>
  );
};

export default DateTab;
