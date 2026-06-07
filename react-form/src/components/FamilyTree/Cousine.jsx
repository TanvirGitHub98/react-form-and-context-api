import React, { useContext } from 'react'
import { AssetContext } from './FamilyTree'

const Cousine = ({name}) => {
    const asset=useContext(AssetContext)
  return (
    <div>
        <h1>Cousine-{name}</h1>
        <p>Asset-{asset}</p>
    </div>
  )
}

export default Cousine