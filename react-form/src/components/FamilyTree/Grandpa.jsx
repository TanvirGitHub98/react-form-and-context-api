import React, { createContext } from "react";
import Dad from "./Dad";
import Uncle from "./Uncle";
import Aunt from "./Aunt";
export const NewAssetContext = createContext("");
const Grandpa = () => {
    const newAsset="Gold"
  return (
    <div>
      <h1>Grandpa</h1>
      <NewAssetContext.Provider value={newAsset}>
        <div className="flex">
          <Dad></Dad>
          <Uncle></Uncle>
          <Aunt></Aunt>
        </div>
      </NewAssetContext.Provider>
    </div>
  );
};

export default Grandpa;
