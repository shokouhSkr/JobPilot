import React from "react";

const Wrapper = ({ center, children }) => {
  return (
    <section
      className={`${
        center ? "flex items-center justify-center md:justify-start" : ""
      } mt-8 h-[calc(100vh-150px)] px-6 text-main md:ml-[19rem]`}
    >
      {children}
    </section>
  );
};

export default Wrapper;
