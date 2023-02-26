import React from "react";

const Wrapper = ({ loading, children }) => {
  return (
    <section
      className={`col-span-full md:col-start-4 ${
        loading ? "grid place-content-center" : ""
      }  bg-blue-800`}
    >
      {children}
    </section>
  );
};

export default Wrapper;
