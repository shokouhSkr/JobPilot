import React, { useState } from "react";
import { AreaChart, BarChart } from "..";
import { useSelector } from "react-redux";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);

  return (
    <section>
      <h1>Monthly Applications</h1>
      <button className="text-sm text-blue-500" onClick={() => setBarChart(!barChart)}>
        {barChart ? "Bar Chart" : "Area Chart"}
      </button>

      {barChart ? <AreaChart data={data} /> : <BarChart data={data} />}
    </section>
  );
};

export default ChartsContainer;
