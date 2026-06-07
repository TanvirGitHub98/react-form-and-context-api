import { createContext, useState } from "react";
import "./FamilyTree.css";
import Grandpa from "./Grandpa";
export const AssetContext = createContext("");
export const TotalAssetContext = createContext("");
const FamilyTree = () => {
  const asset = "Diamond";
  const [money, setMoney] = useState(0);
  return (
    <div>
      <h1>Family Tree</h1>
      <h3>Total Asset={money}</h3>
      {/* Amra context.Provide r sudhu context 2tar jekono tai use korte pari */}
      <TotalAssetContext value={[money, setMoney]}>
        <AssetContext.Provider value={asset}>
          <Grandpa></Grandpa>
        </AssetContext.Provider>
      </TotalAssetContext>
    </div>
  );
};

export default FamilyTree;
