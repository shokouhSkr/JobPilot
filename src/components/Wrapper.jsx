import React from "react";

const Wrapper = ({ center, children }) => {
  return (
    <section
      className={`${
        center ? "grid place-content-center" : ""
      } mt-8 h-[calc(100vh-150px)] px-6 md:ml-[19rem]`}
    >
      {children}
    </section>
  );
};

export default Wrapper;
