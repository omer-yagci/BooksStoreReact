import React from "react";
import { Puff } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="spinner">
      <Puff
        height="80"
        width="80"
        radisu={1}
        color="#774026"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
