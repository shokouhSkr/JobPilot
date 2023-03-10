import React from "react";

const Wrapper = ({ fullHight, center, children }) => {
  return (
    <main
      className={`${
        center ? "flex items-center justify-center md:items-start md:justify-start" : ""
      } ${fullHight ? "" : "h-screen"} px-6 pb-10 sm:px-10 md:ml-64 lg:px-12`}
    >
      {children}
    </main>
  );
};

export default Wrapper;
