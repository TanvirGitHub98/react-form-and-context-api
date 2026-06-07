import React, { useContext,use } from 'react'
import { AssetContext, TotalAssetContext } from './FamilyTree'
import { NewAssetContext } from './Grandpa'

const Special = ({name}) => {
 const asset=useContext(AssetContext)
 const [money,setMoney]=use(TotalAssetContext)
//  amra useContext ba sudhu use bebohar korte pari
 const newAsset=useContext(NewAssetContext)
  return (
    <div>
        <h1>Special {name}</h1>
        <p>Asset {asset}</p>
        <p>New Asset-{newAsset}</p>
        <button onClick={()=>setMoney(money+5000)}>Add Contribution</button>
    </div>
  )
}

export default Special