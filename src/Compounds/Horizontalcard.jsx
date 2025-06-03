import React from 'react'

function Horizontalcard({hdata}) {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div>
                    <img  src={hdata?.og} alt="" />
                </div>
                <div>
                    <p>{hdata?.source}</p>
                    <h1 className='text-xl line-clamp-2'>{hdata?.title}</h1>
                </div>
            </div>
        </div>
    )
}

export default Horizontalcard