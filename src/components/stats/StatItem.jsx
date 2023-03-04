import React from "react";

const StatItem = ({ title, icon, count, color }) => {
  return (
    <div className="rounded-md bg-purple-200 p-4 text-main">
      <div>
        <span>{icon}</span>
        <span>{count}</span>
      </div>
      <h1 className={`${color}`}>{title}</h1>
    </div>
  );
};

export default StatItem;
