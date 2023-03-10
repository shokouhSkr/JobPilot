import React, { useState } from "react";
import { AreaChart, BarChart } from "..";
import { useSelector } from "react-redux";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);

  return (
    <section className="text-primaryTxt">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-2 text-[22px]">Monthly Applications</h1>
        <button className="text-lg text-secondaryTxt" onClick={() => setBarChart(!barChart)}>
          {barChart ? "Bar Chart" : "Area Chart"}
        </button>
      </div>
      {barChart ? <AreaChart data={data} /> : <BarChart data={data} />}
    </section>
  );
};

export default ChartsContainer;
