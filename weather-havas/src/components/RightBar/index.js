import React from "react";
import DateTab from "./DateTab";

const RightBar = ({data}) => {

    // console.log(data,"tttt")
  return (
    <>
    <div className="col-md-8 bg-right-box">
      <DateTab data={data} />
      </div>
    </>
  );
};

export default RightBar;
