import React from "react";
import Cousine from "./Cousine";

const Aunt = () => {
  return (
    <div>
      <h1>Aunt</h1>
      <div className="flex">
        <Cousine name="Lily"></Cousine>
        <Cousine name="Jobbar"></Cousine>
      </div>
    </div>
  );
};

export default Aunt;
