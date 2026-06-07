import React from "react";
import Myself from "./Myself";
import Brother from "./Brother";

const Dad = () => {
  return (
    <div>
      <h1>Dad</h1>
      <div className="flex">
        <Myself></Myself>
        <Brother></Brother>
      </div>
    </div>
  );
};

export default Dad;
