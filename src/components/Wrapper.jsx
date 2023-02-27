import React from "react";

const Wrapper = ({ center, children }) => {
  return (
    <section
      className={`${
        center ? "grid place-content-center" : ""
      } h-[calc(100vh-64px)] bg-blue-800 md:ml-80`}
    >
      {children}
    </section>
  );
};

export default Wrapper;
