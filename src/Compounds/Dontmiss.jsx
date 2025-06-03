import React, { useContext } from 'react'
import Horizontalcard from './Horizontalcard'
import Card from './Card'
import { Newscontext } from '../Context/Newscontext'
import Cardv from './Cardv'
import Heading from './Heading'

function Dontmiss() {
    const {techdata}=useContext(Newscontext)
    return (
        <div>
            
            <Heading title={'Technology'}/>

            <div className="grid  grid-cols-1 lg:grid-cols-3  gap-4 mt-10">

                <div ><Card data={techdata[0]} /></div>

                <div >
                    {techdata?.slice(1,6).map(items=>(
                    <Horizontalcard hdata={items} />

                    ))}
                    </div>
                    <div>
                        {techdata?.slice(10,15).map(items=>(
                            <Horizontalcard hdata={items}/>
                            
                        ))}
                    </div>

            </div>

           

           
        </div>
    )
}

export default Dontmiss