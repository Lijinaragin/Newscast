import React from 'react'

function Card({data}) {
  return (
   
    <div>
      <div >
        <div className='w-7000'>
        <img width={400}  src={data?.og} alt="" />
        </div>
        <p>12/5/2024</p>
        <h1  className='text-lg  lg:text-4xl font-bold'>{data?.title}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, nulla dolore! Molestiae in repellat, veniam sint blanditiis culpa, fuga excepturi quasi dolor pariatur laborum voluptatum incidunt a eius, repudiandae quidem.</p>

      </div>
    </div>

  )
}

export default Card