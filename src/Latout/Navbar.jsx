import React from 'react'
import { Search } from 'lucide-react';

function Navbar() {
  return (
    <div className='bg-gray-300'>
        <div className='grid grid-cols-2'>
            <img src="public/Images/Logo Final Whaite 1 (2).png" alt="" />
        </div>
        <div className='flex overflow-auto gap-4 bg-gray-700 text-white text-2xl p-3 mt-5'>
            <p>Home</p>
            <p>International</p>
            <p>Sports</p>
            <p>Opinion</p>
            <p>Business</p>
            <p>Youth</p>
            <p>Entertainment</p>
            <p>Lifestyle</p>
            <p>Pages</p>
            <div className='flex items-end'>
               <input className='border-2' placeholder='Search for' type="text" />
                <Search />

            </div>
        </div>
    </div>
  )
}

export default Navbar