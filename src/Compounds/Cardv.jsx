import React from 'react'

function Cardv({data}) {
  return (
    <div>
        <img src={data?.og} alt="" />
        <p>{data?.source}</p>
        <h1 className='font-extrabold text-2xl'>{data?.title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatum, officia vero ullam eum eius quasi. Voluptates praesentium voluptatibus consequuntur nobis facere atque soluta delectus suscipit! Voluptatum dolores necessitatibus molestias.</p>
    </div>
  )
}

export default Cardv