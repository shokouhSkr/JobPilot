import React from "react";

const Wrapper = ({ center, children }) => {
  return (
    <main
      className={`${
        center ? "flex items-center justify-center md:justify-start" : ""
      } text-main mt-8 h-[calc(100vh-150px)] px-6 md:ml-64`}
    >
      {children}
    </main>
  );
};

export default Wrapper;
