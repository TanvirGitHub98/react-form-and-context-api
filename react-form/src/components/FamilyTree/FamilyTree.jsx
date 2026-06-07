import { createContext } from 'react'
import './FamilyTree.css'
import Grandpa from './Grandpa'
 export const AssetContext=createContext('')
const FamilyTree = () => {
    const asset="Diamond"
  return (
    <div>
        <h1>Family Tree</h1>
        <AssetContext.Provider value={asset} >
            <Grandpa></Grandpa>

        </AssetContext.Provider>
        
    </div>
  )
}

export default FamilyTree