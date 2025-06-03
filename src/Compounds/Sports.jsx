import React from 'react'
import Cardv from './Cardv'
import { useContext } from 'react'
import { Newscontext } from '../Context/Newscontext'
import Horizontalcard from './Horizontalcard'
import { Facebook, Instagram, Youtube, Twitter, Dribbble,  } from 'lucide-react';
import Heading from './Heading'


function Sports() {

    const { newsdata } = useContext(Newscontext)
    const {sportdata}=useContext(Newscontext)
    return (
        <div>            
            <Heading title={'Sports'}/>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
            <div>
                <Cardv data={newsdata[3]} />
            </div>
            <div>
                {sportdata?.slice(10, 15).map(items => (
                    <Horizontalcard hdata={items} />

                ))}
            </div>
            <div className='mt-10 items-center'>

                <div className="grid grid-cols-6 grid-rows-5 gap-4">
                    <div className="col-span-2 bg-blue-400"><Twitter /> Twitter</div>
                    <div className="col-span-2 col-start-3  bg-blue-700">    <Facebook />Facebook
                    </div>
                    <div className="col-span-2 col-start-5 bg-pink-800"><Instagram />Instagram</div>
                    <div className="col-span-2 row-start-2 bg-red-700"><Youtube />Youtube
                    </div>
                    <div className="col-span-2 col-start-3 row-start-2 bg-yellow-700">BE</div>
                    <div className="col-span-2 col-start-5 row-start-2  bg-green-700"><Dribbble />Dribbble</div>
                </div>
                <div>
                    <img src="public/Images/Ad.png" alt="" />
                </div>


            </div>
        </div>
        </div>
    )
}

export default Sports