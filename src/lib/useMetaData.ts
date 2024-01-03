import { useEffect, useState } from "react"
import { YOUTUBE_VIDEO_METADATA_API } from "./url";
import moment from "moment";


export const useMetaData =(id:any,video:any)=>{
    const [duration,setDuration] = useState(null);
    const [views,setViews] = useState(null)

    useEffect(()=>{
        getMedata()
    },[id])

    const getMedata =async()=>{
        if(id?.videoId){
            const response = await fetch(YOUTUBE_VIDEO_METADATA_API+id?.videoId)
            const data = await response.json()
            const item = data?.items[0]
    
            setDuration(item?.contentDetails?.duration);
            setViews(item?.statistics?.viewCount);
        }else{
            setDuration(video.contentDetails?.duration)
            setViews(video.statistics?.viewCount)
        }
        
    }

    const seconds = moment.duration(duration).asSeconds();
    const _duration = moment.utc(seconds*1000).format("mm:ss")

    return {_duration,views}

}