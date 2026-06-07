import React from "react";
import Cousine from "./Cousine";

const Uncle = () => {
  return (
    <div>
      <h1>Uncle</h1>
      <div className="flex">
        <Cousine name="Hira"></Cousine>
        <Cousine name="Jaima"></Cousine>
      </div>
    </div>
  );
};

export default Uncle;
