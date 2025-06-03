import React from 'react'

function Footer() {
  return (
    <div className='grid  grid-cols-1 lg:grid-cols-4 mt-2 bg-gray-400 p-2'>
        <div>
            <img src="public/Images/Logo Final Whaite 1 (2).png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem unde, ex optio reiciendis magnam voluptas quibusdam eligendi, voluptate at amet officiis. Reprehenderit provident assumenda temporibus enim molestias vitae mollitia autem.</p>
        </div>
        <div>
            <h1 className='text-2xl'>Photo Gallery</h1>
        <div className='grid grid-cols-3'>
            <img src="public/Images/Image (1).png" alt="" />
            <img src="public/Images/Image (2).png" alt="" />
            <img src="public/Images/Image (3).png" alt="" />
            <img src="public/Images/Image (4).png" alt="" />
            <img src="public/Images/Image (5).png" alt="" />
            <img src="public/Images/Image.png" alt="" />
        </div>
        </div>
        <div>
            <div>
                <h1 className='text-2xl'>Tags</h1>
                <div >
                    <div className='grid grid-cols-4'>
                    <p className='bg-amber-600'>Football</p>
                    <p className='bg-blue-600'>Cricket</p>
                    <p className='bg-red-600'>Covid 19</p>
                    <p className='bg-green-500'>Life style</p>
                    </div>
                    <div className='grid grid-cols-3'>
                    <p className='bg-yellow-500'>Trending News</p>
                    <p className='bg-purple-700'>Technology</p>
                    <p className='bg-rose-600'>Travel</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='ml-5'>
                <div>
                    <h1 className='text-2xl'>Stay In Touch</h1>
                </div>
                <div className='flex flex-col'>
                    <p>To be upload all latest news, offers and announcement</p>
                    <input className='border' placeholder='Enter your email address' type="text" /><br/>
                    <button className='bg-red-600 w-full'>Subscribe</button>
                </div>
            </div>
    </div>
  )
}

export default Footer