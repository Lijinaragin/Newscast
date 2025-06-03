import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Newscontext =createContext()
export const Newsprovider=({children})=>{
    const [newsdata,setnewsdata]=useState([])
    const[sportdata,setsportsdata]=useState([])
    const[techdata,settechdata]=useState([])
    const[Entertainmentdata,setEntertainmentdata]=useState([])

    const fetchnews = async()=>{
        try {
            const api=await axios.get("https://ok.surf/api/v1/cors/news-feed")
            console.log(api);
            setnewsdata(api.data.Business)
            setsportsdata(api.data.Sports)
            settechdata(api.data.Technology)
            setEntertainmentdata(api.data.Entertainment)

            
        } catch (error) {
            console.log('error');
            
        }
    }
    useEffect(()=>{
        fetchnews()
    },[])


    return(
        <Newscontext.Provider value={{newsdata,sportdata,techdata,Entertainmentdata}}>
            {children}
        </Newscontext.Provider>
    )
}