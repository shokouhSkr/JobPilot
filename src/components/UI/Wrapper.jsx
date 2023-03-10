import React from "react";

const Wrapper = ({ center, children }) => {
  return (
    <main
      className={`${
        center ? "flex items-center justify-center md:justify-start" : ""
      } px-6 pb-20 sm:px-10 md:ml-64 lg:px-12`}
    >
      {children}
    </main>
  );
};

export default Wrapper;
