import React from "react";

const Wrapper = ({ center, children }) => {
  return (
    <main
      className={`${
        center ? "flex items-center justify-center md:items-start md:justify-start" : ""
      } h-screen px-6 sm:px-10 md:ml-64 lg:px-12`}
    >
      {children}
    </main>
  );
};

export default Wrapper;
