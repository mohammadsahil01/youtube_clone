import { Appbar } from "@/components/Appbar"
import VideoCard from "@/components/Videocard"
import { AddSearchVideos, SelectSearchVideos } from "@/lib/searchSlice"
import { YOUTUBE_RESULTS_API } from "@/lib/url"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {useSearchParams } from "react-router-dom"




export const SearchPage = ()=>{
    const dispatch = useDispatch()
    const Videos = useSelector(SelectSearchVideos)
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")
    useEffect(()=>{
        const getVideos = async()=>{
            if(query?.trim().length===0){
              return
            }else{
                const response = await fetch(YOUTUBE_RESULTS_API+query)
                const data = await response.json()
                dispatch(AddSearchVideos(data?.items))
            }
        }
        getVideos()
    },[query])


    return(<>
        <Appbar/>
        <div className="ml-5 py-2">
         <span className="text-gray-600">Search Results for </span>{query}
        </div>
        {!Videos?(<div>loading</div>):
        (<div className=" mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 hover:transition-all ">
            {Videos.map((video:any)=> 
            
             <div key={video.id.videoId?video.id.videoId:video.id}  >
                <VideoCard 
                video={video} 
            />
            </div>

           
            )}
        </div>)
    }</>
    )
}