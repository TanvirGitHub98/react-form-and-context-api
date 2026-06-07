import React, { useContext } from 'react'
import { AssetContext } from './FamilyTree'

const Special = ({name}) => {
 const asset=useContext(AssetContext)
  return (
    <div>
        <h1>Special {name}</h1>
        <p>Asset {asset}</p>
    </div>
  )
}

export default Special