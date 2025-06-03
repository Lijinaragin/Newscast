import React, { useContext } from 'react';
import Horizontalcard from './Horizontalcard';
import { Newscontext } from '../Context/Newscontext';
import Heading from './Heading';

function Entertainment() {
  const { Entertainmentdata } = useContext(Newscontext);

  return (
    <div className="p-5">
      <Heading title="Entertainment" />
      <div
        style={{ backgroundImage: `url(${Entertainmentdata[0]?.og})` }}
        className="relative bg-cover bg-center h-[500px] rounded-xl shadow-lg overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
        <div className="absolute bottom-10 px-6">
          <div className="flex items-center gap-4 mb-3">
            <img
              width={40}
              className="rounded-full border-2 border-white shadow-md"
              src="/Images/Image (1).png"
              alt="Author"
            />
            <p className="text-white font-semibold">{Entertainmentdata.source}</p>
          </div>
          <h1 className=" text-lg lg:text-4xl font-bold text-white leading-tight drop-shadow-md">
            {Entertainmentdata[0]?.title}
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap mt-5 gap-6">
        {Entertainmentdata?.slice(1, 4).map((items) => (
          <Horizontalcard key={items.id} hdata={items} />
        ))}
      </div>
    </div>
  );
}

export default Entertainment;
