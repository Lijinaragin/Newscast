import React from 'react'
import Card from '../Compounds/Card'
import Herosection from '../Compounds/Herosection'
import Dontmiss from '../Compounds/Dontmiss'
import Entertainment from '../Compounds/Entertainment'
import Sports from '../Compounds/Sports'

function Home() {
  return (
    <div>
        <Herosection/>
        <Dontmiss/>
        <Entertainment/>
        <Sports/>
        
        
    </div>
  )
}

export default Home