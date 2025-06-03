import React, { useContext } from 'react';
import { Newscontext } from '../Context/Newscontext';

function Herosection() {
    const { newsdata } = useContext(Newscontext);

    return (
        <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-none gap-4 auto-rows-fr">
                {/* First big card */}
                <div
                    style={{ backgroundImage: `url(${newsdata[0]?.og})` }}
                    className="relative bg-cover bg-center col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[300px] lg:min-h-[750px]"
                >
                    <div className="h-full text-white bg-black/40 relative p-4">
                        <div className="absolute bottom-10">
                            <div className="flex items-center gap-4">
                                <img width={40} className="rounded-full" src={newsdata[0]?.source_icon} alt="" />
                                <p>{newsdata[0]?.source}</p>
                            </div>
                            <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold">{newsdata[0]?.title}</h1>
                        </div>
                    </div>
                </div>

                {/* Second card */}
                <div
                    style={{ backgroundImage: `url(${newsdata[1]?.og})` }}
                    className="relative bg-cover bg-center min-h-[200px]"
                >
                    <div className="h-full text-white bg-black/40 relative p-4">
                        <div className="absolute bottom-10">
                            <div className="flex items-center gap-4">
                                <img width={40} className="rounded-full" src={newsdata[1]?.source_icon} alt="" />
                                <p>{newsdata[1]?.source}</p>
                            </div>
                            <h1 className="sm:text-sm text-lg lg:text-3xl font-bold">{newsdata[1]?.title}</h1>
                        </div>
                    </div>
                </div>

                {/* Third card */}
                <div
                    style={{ backgroundImage: `url(${newsdata[2]?.og})` }}
                    className="relative bg-cover bg-center min-h-[200px]"
                >
                    <div className="h-full text-white bg-black/40 relative p-4">
                        <div className="absolute bottom-10">
                            <div className="flex items-center gap-4">
                                <img width={40} className="rounded-full" src={newsdata[2]?.source_icon} alt="" />
                                <p>{newsdata[2]?.source}</p>
                            </div>
                            <h1 className="text-xl sm:text-lg lg:text-3xl font-bold">{newsdata[2]?.title}</h1>
                        </div>
                    </div>
                </div>

                {/* Fourth card */}
                <div
                    style={{ backgroundImage: `url(${newsdata[3]?.og})` }}
                    className="relative bg-cover bg-center min-h-[200px] lg:col-span-2"
                >
                    <div className="h-full text-white bg-black/40 relative p-4">
                        <div className="absolute bottom-10">
                            <div className="flex items-center gap-4">
                                <img width={40} className="rounded-full" src={newsdata[3]?.source_icon} alt="" />
                                <p>{newsdata[3]?.source}</p>
                            </div>
                            <h1 className="text-xl sm:text-lg lg:text-3xl font-bold">{newsdata[3]?.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Herosection;
