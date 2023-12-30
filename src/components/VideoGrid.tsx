import { YOUTUBE_VIDEOS_API } from "@/lib/url"
import VideoCard from "./Videocard"
import { useEffect, useState } from "react"






export const VideoGrid = ()=>{

    const [videos,setVideos] = useState<any>()
    useEffect(()=>{
        const getVideos=async()=>{
            let url
            url = YOUTUBE_VIDEOS_API
        const response = await fetch(url)
        const data = await response.json()
            setVideos(data.items)
        }
        getVideos()
    },[])

    return(
        !videos?(<div>loading</div>):
        (<div className="m-20 mt-7 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            {videos.map((video:any)=> 
            <div className="pb-6">
                <VideoCard 
                video={video}
            />
            </div>
            )}
        </div>)
    )
}