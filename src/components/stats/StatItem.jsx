import React from "react";

const StatItem = ({ title, icon, count }) => {
  return (
    <div
      className={`rounded-md border-b-[6px] border-[#7f62c3] bg-screen p-5 text-primaryTxt xs:p-6 lg:p-8`}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-4xl xs:text-5xl">{count}</span>
        <span className="grid place-content-center rounded-md bg-[#f9e3c6] p-2 text-3xl text-secondaryBg xs:text-4xl">
          {icon}
        </span>
      </div>
      <h1 className="text-base xs:text-lg">{title}</h1>
    </div>
  );
};

export default StatItem;
